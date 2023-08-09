import { AppHealthCustomer, AppHealthTechnicalSolution } from '../app-health.types';
import { customerColumnsConfig } from '../customer/customer.columns-config';
import { CustomerService } from '../customer/customer.service';
import { TechnicalSolutionService } from './technical-solution.service';
import { ChangeDetectionStrategy, Component, Injector, ViewChild, ViewEncapsulation } from '@angular/core';
import { Validators } from '@angular/forms';
import { Action, ColumnConfig, ColumnDataType, Crumb, defaultDetailImports, exportRows, GridColumnsConfigStorageService, GridData, GridFiltersStorageService, GridSelectElementComponent, GridStateService, log, mapActions, QueryStatementHandler, Utils, ViewDetailComponent } from '@aurora';
import { lastValueFrom, Observable, takeUntil } from 'rxjs';

@Component({
    selector       : 'app-health-technical-solution-detail',
    templateUrl    : './technical-solution-detail.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone     : true,
    imports        : [
        ...defaultDetailImports,
    ],
})
export class TechnicalSolutionDetailComponent extends ViewDetailComponent
{
    // ---- customizations ----
    // ..

    // Object retrieved from the database request,
    // it should only be used to obtain uninitialized
    // data in the form, such as relations, etc.
    // It should not be used habitually, since the source of truth is the form.
    managedObject: AppHealthTechnicalSolution;

    // relationships
    /* #region  variables to manage grid-select-element customer */
    @ViewChild('customerGridElementSelector') customersComponent: GridSelectElementComponent;
    customersGridId: string = 'appHealth::technicalSolution.detail.customersGridList';
    customersGridData$: Observable<GridData<AppHealthCustomer>>;
    customersColumnsConfig$: Observable<ColumnConfig[]>;
    customersOriginColumnsConfig: ColumnConfig[] = [
        {
            type   : ColumnDataType.ACTIONS,
            field  : 'Actions',
            sticky : true,
            actions: row =>
            {
                return [
                    {
                        id          : 'appHealth::technicalSolution.detail.selectCustomer',
                        isViewAction: false,
                        translation : 'select',
                        icon        : 'add_link',
                    },
                ];
            },
        },
        ...customerColumnsConfig,
    ];
    /* #endregion variables to manage grid-select-element customer */

    // breadcrumb component definition
    breadcrumb: Crumb[] = [
        { translation: 'App' },
        { translation: 'appHealth.TechnicalSolutions', routerLink: ['/app-health/technical-solution']},
        { translation: 'appHealth.TechnicalSolution' },
    ];

    constructor(
        private readonly customerService: CustomerService,
        private readonly gridColumnsConfigStorageService: GridColumnsConfigStorageService,
        private readonly gridFiltersStorageService: GridFiltersStorageService,
        private readonly gridStateService: GridStateService,
        protected readonly injector: Injector,
        private readonly technicalSolutionService: TechnicalSolutionService,
    )
    {
        super(injector);
    }

    // this method will be called after the ngOnInit of
    // the parent class you can use instead of ngOnInit
    init(): void
    {
        /**/
        // customer grid-select-element
        this.customersColumnsConfig$ = this.gridColumnsConfigStorageService
            .getColumnsConfig(this.customersGridId, this.customersOriginColumnsConfig)
            .pipe(takeUntil(this.unsubscribeAll$));
        this.customersGridData$ = this.customerService.pagination$;
    }

    onSubmit($event): void
    {
        // we have two nested forms, we check that the submit comes from the button
        // that corresponds to the main form to the main form
        if ($event.submitter.getAttribute('form') !== $event.submitter.form.getAttribute('id'))
        {
            $event.preventDefault();
            $event.stopPropagation();
            return;
        }

        // manage validations before execute actions
        if (this.fg.invalid)
        {
            log('[DEBUG] Error to validate form: ', this.fg);
            this.validationMessagesService.validate();
            return;
        }

        this.actionService.action({
            id: mapActions(
                this.currentViewAction.id,
                {
                    'appHealth::technicalSolution.detail.new' : 'appHealth::technicalSolution.detail.create',
                    'appHealth::technicalSolution.detail.edit': 'appHealth::technicalSolution.detail.update',
                },
            ),
            isViewAction: false,
        });
    }

    createForm(): void
    {
        this.fg = this.fb.group({
            id: ['', [Validators.required, Validators.minLength(36), Validators.maxLength(36)]],
            customerId: ['', [Validators.required, Validators.minLength(36), Validators.maxLength(36)]],
            name: ['', [Validators.required, Validators.maxLength(255)]],
            description: '',
            architectureDiagram: ['', [Validators.maxLength(255)]],
            proposal: '',
        });
    }

    async handleAction(action: Action): Promise<void>
    {
        // add optional chaining (?.) to avoid first call where behaviour subject is undefined
        switch (action?.id)
        {
            /* #region common actions */
            case 'appHealth::technicalSolution.detail.new':
                this.fg.get('id').setValue(Utils.uuid());
                break;

            case 'appHealth::technicalSolution.detail.edit':
                this.technicalSolutionService
                    .technicalSolution$
                    .pipe(takeUntil(this.unsubscribeAll$))
                    .subscribe(item =>
                    {
                        this.managedObject = item;
                        this.fg.patchValue(item);
                    });
                break;

            case 'appHealth::technicalSolution.detail.create':
                try
                {
                    await lastValueFrom(
                        this.technicalSolutionService
                            .create<AppHealthTechnicalSolution>({
                                object: this.fg.value,
                            }),
                    );

                    this.snackBar.open(
                        `${this.translocoService.translate('appHealth.TechnicalSolution')} ${this.translocoService.translate('Created.M')}`,
                        undefined,
                        {
                            verticalPosition: 'top',
                            duration        : 3000,
                        },
                    );

                    this.router.navigate(['app-health/technical-solution']);
                }
                catch(error)
                {
                    log(`[DEBUG] Catch error in ${action.id} action: ${error}`);
                }
                break;

            case 'appHealth::technicalSolution.detail.update':
                try
                {
                    await lastValueFrom(
                        this.technicalSolutionService
                            .updateById<AppHealthTechnicalSolution>({
                                object: this.fg.value,
                            }),
                    );

                    this.snackBar.open(
                        `${this.translocoService.translate('appHealth.TechnicalSolution')} ${this.translocoService.translate('Saved.M')}`,
                        undefined,
                        {
                            verticalPosition: 'top',
                            duration        : 3000,
                        },
                    );

                    this.router.navigate(['app-health/technical-solution']);
                }
                catch(error)
                {
                    log(`[DEBUG] Catch error in ${action.id} action: ${error}`);
                }
                break;
                /* #endregion common actions */

            /* #region actions to manage  grid-select-element */
            case 'appHealth::technicalSolution.detail.customersOpenDialog':
                this.customersComponent.gridState = {
                    columnFilters: this.gridFiltersStorageService.getColumnFilterState(this.customersGridId),
                    page         : this.gridStateService.getPage(this.customersGridId),
                    sort         : this.gridStateService.getSort(this.customersGridId),
                    search       : this.gridStateService.getSearchState(this.customersGridId),
                };
                this.customersComponent.openDialog();
                break;

            case 'appHealth::technicalSolution.detail.customersPagination':
                await lastValueFrom(
                    this.customerService
                        .pagination({
                            query: action.meta.query ?
                                action.meta.query :
                                QueryStatementHandler
                                    .init({ columnsConfig: customerColumnsConfig })
                                    .setColumFilters(this.gridFiltersStorageService.getColumnFilterState(this.customersGridId))
                                    .setSort(this.gridStateService.getSort(this.customersGridId))
                                    .setPage(this.gridStateService.getPage(this.customersGridId))
                                    .setSearch(this.gridStateService.getSearchState(this.customersGridId))
                                    .getQueryStatement(),
                        }),
                );
                break;

            case 'appHealth::technicalSolution.detail.selectCustomer':
                const customer = action.meta.row as AppHealthCustomer;

                this.fg.get('customerId').setValue(customer.id);
                this.fg.get('customerName').setValue(customer.name);
                this.fg.markAsDirty();

                this.customersComponent.closeDialog();
                break;

            case 'appHealth::technicalSolution.detail.exportCustomers':
                const customerRows = await lastValueFrom(
                    this.customerService
                        .get({
                            query     : action.meta.query,
                            constraint: { /**/ },
                        }),
                );

                const customerColumns: string[] = customerColumnsConfig.map(customerColumnConfig => customerColumnConfig.field);
                const customerHeaders = customerColumns.map(column => this.translocoService.translate('appHealth.' + column.toPascalCase()));

                exportRows(
                    customerRows.objects,
                    'orderCustomers.' + action.meta.format,
                    customerColumns,
                    customerHeaders,
                    action.meta.format,
                );
                break;
                /* #endregion actions to manage  grid-select-element */
        }
    }
}
