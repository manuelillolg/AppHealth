import gql from 'graphql-tag';

export const fields = `
    name
    score
    createdAt
    updatedAt
`;

export const relationsFields = `
`;

// default methods
export const paginationQuery = gql`
    query AppHealthPaginateInfrastuctureProviders (
        $query: QueryStatement
        $constraint: QueryStatement
    ) {
        pagination: appHealthPaginateInfrastuctureProviders (
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
    query AppHealthGetInfrastuctureProviders (
        $query: QueryStatement
        $constraint: QueryStatement
    ) {
        objects: appHealthGetInfrastuctureProviders (
            query: $query
            constraint: $constraint
        ) {
            id
            #FIELDS
        }
    }
`;

export const findByIdQuery = gql`
    query AppHealthFindInfrastructureProviderById (
        $id: ID
        $constraint: QueryStatement
    ) {
        object: appHealthFindInfrastructureProviderById (
            id: $id
            constraint: $constraint
        ) {
            id
            #FIELDS
        }
    }
`;

export const findQuery = gql`
    query AppHealthFindInfrastructureProvider (
        $query: QueryStatement
        $constraint: QueryStatement
    ) {
        object: appHealthFindInfrastructureProvider (
            query: $query
            constraint: $constraint
        ) {
            id
            #FIELDS
        }
    }
`;

export const createMutation = gql`
    mutation AppHealthCreateInfrastructureProvider (
        $payload: AppHealthCreateInfrastructureProviderInput!
    ) {
        appHealthCreateInfrastructureProvider (
            payload: $payload
        ) {
            ${fields}
        }
    }
`;

export const updateByIdMutation = gql`
    mutation AppHealthUpdateInfrastructureProviderById (
        $payload: AppHealthUpdateInfrastructureProviderByIdInput!
        $constraint: QueryStatement
    ) {
        appHealthUpdateInfrastructureProviderById (
            payload: $payload
            constraint: $constraint
        ) {
            ${fields}
        }
    }
`;

export const updateMutation = gql`
    mutation AppHealthUpdateInfrastuctureProviders (
        $payload: AppHealthUpdateInfrastuctureProvidersInput!
        $query: QueryStatement
        $constraint: QueryStatement
    ) {
        appHealthUpdateInfrastuctureProviders (
            payload: $payload
            query: $query
            constraint: $constraint
        ) {
            ${fields}
        }
    }
`;

export const deleteByIdMutation = gql`
    mutation AppHealthDeleteInfrastructureProviderById (
        $id: ID!
        $constraint: QueryStatement
    ) {
        appHealthDeleteInfrastructureProviderById (
            id: $id
            constraint: $constraint
        ) {
            ${fields}
        }
    }
`;

export const deleteMutation = gql`
    mutation AppHealthDeleteInfrastuctureProviders (
        $query: QueryStatement
        $constraint: QueryStatement
    ) {
        appHealthDeleteInfrastuctureProviders (
            query: $query
            constraint: $constraint
        ) {
            ${fields}
        }
    }
`;
