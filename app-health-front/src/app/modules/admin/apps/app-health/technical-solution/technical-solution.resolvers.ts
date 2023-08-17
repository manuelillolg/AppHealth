import { AppHealthCustomer, AppHealthTechnicalSolution } from '../app-health.types';
import { customerColumnsConfig } from '../customer/customer.columns-config';
import { CustomerService } from '../customer/customer.service';
import { technicalSolutionColumnsConfig } from './technical-solution.columns-config';
import { TechnicalSolutionService } from './technical-solution.service';
import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { Action, ActionService, GridData, GridFiltersStorageService, GridStateService, QueryStatementHandler } from '@aurora';

export const technicalSolutionPaginationResolver: ResolveFn<GridData<AppHealthTechnicalSolution>> = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
) =>
{
    const actionService = inject(ActionService);
    const gridFiltersStorageService = inject(GridFiltersStorageService);
    const gridStateService = inject(GridStateService);
    const technicalSolutionService = inject(TechnicalSolutionService);

    actionService.action({
        id          : 'appHealth::technicalSolution.list.view',
        isViewAction: true,
    });

    const gridId = 'appHealth::technicalSolution.list.mainGridList';
    gridStateService.setPaginationActionId(gridId, 'appHealth::technicalSolution.list.pagination');
    gridStateService.setExportActionId(gridId, 'appHealth::technicalSolution.list.export');

    return technicalSolutionService.pagination({
        query: QueryStatementHandler
            .init({ columnsConfig: technicalSolutionColumnsConfig })
            .setColumFilters(gridFiltersStorageService.getColumnFilterState(gridId))
            .setSort(gridStateService.getSort(gridId))
            .setPage(gridStateService.getPage(gridId))
            .setSearch(gridStateService.getSearchState(gridId))
            .getQueryStatement(),
    });
};

export const technicalSolutionNewResolver: ResolveFn<{
    appHealthPaginateCustomers: GridData<AppHealthCustomer>;
}> = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
) =>
{
    const actionService = inject(ActionService);
    const gridFiltersStorageService = inject(GridFiltersStorageService);
    const gridStateService = inject(GridStateService);
    const technicalSolutionService = inject(TechnicalSolutionService);

    // paginate to manage customers grid-select-element
    const customersGridId = 'appHealth::technicalSolution.detail.customersGridList';
    gridStateService.setPaginationActionId(customersGridId, 'appHealth::technicalSolution.detail.customersPagination');
    gridStateService.setExportActionId(customersGridId, 'appHealth::technicalSolution.detail.exportCustomers');

    actionService.action({
        id          : 'appHealth::technicalSolution.detail.new',
        isViewAction: true,
    });

    return technicalSolutionService.getRelations({
        queryPaginateCustomers: QueryStatementHandler
            .init({ columnsConfig: customerColumnsConfig })
            .setColumFilters(gridFiltersStorageService.getColumnFilterState(customersGridId))
            .setSort(gridStateService.getSort(customersGridId))
            .setPage(gridStateService.getPage(customersGridId))
            .setSearch(gridStateService.getSearchState(customersGridId))
            .getQueryStatement(),
    });
};

export const technicalSolutionEditResolver: ResolveFn<{
    appHealthPaginateCustomers: GridData<AppHealthCustomer>;
    object: AppHealthTechnicalSolution;
}> = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
) =>
{
    const actionService = inject(ActionService);
    const gridFiltersStorageService = inject(GridFiltersStorageService);
    const gridStateService = inject(GridStateService);
    const technicalSolutionService = inject(TechnicalSolutionService);

    // paginate to manage customers grid-select-element
    const customersGridId = 'appHealth::technicalSolution.detail.customersGridList';
    gridStateService.setPaginationActionId(customersGridId, 'appHealth::technicalSolution.detail.customersPagination');
    gridStateService.setExportActionId(customersGridId, 'appHealth::technicalSolution.detail.exportCustomers');

    actionService.action({
        id          : 'appHealth::technicalSolution.detail.edit',
        isViewAction: true,
    });

    return technicalSolutionService
        .findByIdWithRelations({
            id: route.paramMap.get('id'),
            queryPaginateCustomers: QueryStatementHandler
                .init({ columnsConfig: customerColumnsConfig })
                .setColumFilters(gridFiltersStorageService.getColumnFilterState(customersGridId))
                .setSort(gridStateService.getSort(customersGridId))
                .setPage(gridStateService.getPage(customersGridId))
                .setSearch(gridStateService.getSearchState(customersGridId))
                .getQueryStatement(),
            constraintPaginateCustomers: { /**/ },
        });
};
