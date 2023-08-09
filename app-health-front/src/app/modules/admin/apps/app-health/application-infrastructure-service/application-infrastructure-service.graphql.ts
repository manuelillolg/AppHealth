import gql from 'graphql-tag';

export const fields = `
    applicationId
    infrastructureServiceId
    averageCostPerYear
    score
    createdAt
    updatedAt
`;

export const relationsFields = `
`;

// default methods
export const paginationQuery = gql`
    query AppHealthPaginateApplicationInfrastructureServices (
        $query: QueryStatement
        $constraint: QueryStatement
    ) {
        pagination: appHealthPaginateApplicationInfrastructureServices (
            query: $query
            constraint: $constraint
        ) {
            total
            rows
            count
        }
    }
`;

export const getQuery = gql`
    query AppHealthGetApplicationInfrastructureServices (
        $query: QueryStatement
        $constraint: QueryStatement
    ) {
        objects: appHealthGetApplicationInfrastructureServices (
            query: $query
            constraint: $constraint
        ) {
            id
            #FIELDS
        }
    }
`;

export const findByIdQuery = gql`
    query AppHealthFindApplicationInfrastructureServiceById (
        $id: ID
        $constraint: QueryStatement
    ) {
        object: appHealthFindApplicationInfrastructureServiceById (
            id: $id
            constraint: $constraint
        ) {
            id
            #FIELDS
        }
    }
`;

export const findQuery = gql`
    query AppHealthFindApplicationInfrastructureService (
        $query: QueryStatement
        $constraint: QueryStatement
    ) {
        object: appHealthFindApplicationInfrastructureService (
            query: $query
            constraint: $constraint
        ) {
            id
            #FIELDS
        }
    }
`;

export const createMutation = gql`
    mutation AppHealthCreateApplicationInfrastructureService (
        $payload: AppHealthCreateApplicationInfrastructureServiceInput!
    ) {
        appHealthCreateApplicationInfrastructureService (
            payload: $payload
        ) {
            ${fields}
        }
    }
`;

export const updateByIdMutation = gql`
    mutation AppHealthUpdateApplicationInfrastructureServiceById (
        $payload: AppHealthUpdateApplicationInfrastructureServiceByIdInput!
        $constraint: QueryStatement
    ) {
        appHealthUpdateApplicationInfrastructureServiceById (
            payload: $payload
            constraint: $constraint
        ) {
            ${fields}
        }
    }
`;

export const updateMutation = gql`
    mutation AppHealthUpdateApplicationInfrastructureServices (
        $payload: AppHealthUpdateApplicationInfrastructureServicesInput!
        $query: QueryStatement
        $constraint: QueryStatement
    ) {
        appHealthUpdateApplicationInfrastructureServices (
            payload: $payload
            query: $query
            constraint: $constraint
        ) {
            ${fields}
        }
    }
`;

export const deleteByIdMutation = gql`
    mutation AppHealthDeleteApplicationInfrastructureServiceById (
        $id: ID!
        $constraint: QueryStatement
    ) {
        appHealthDeleteApplicationInfrastructureServiceById (
            id: $id
            constraint: $constraint
        ) {
            ${fields}
        }
    }
`;

export const deleteMutation = gql`
    mutation AppHealthDeleteApplicationInfrastructureServices (
        $query: QueryStatement
        $constraint: QueryStatement
    ) {
        appHealthDeleteApplicationInfrastructureServices (
            query: $query
            constraint: $constraint
        ) {
            ${fields}
        }
    }
`;
