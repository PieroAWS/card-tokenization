import { APIGatewayEventDefaultAuthorizerContext, APIGatewayEventRequestContextWithAuthorizer, APIGatewayProxyEvent, APIGatewayProxyEventPathParameters } from "aws-lambda";

export const makeEventMock = (body: unknown, httpMethod = 'POST', path = '/token', pathParameters: APIGatewayProxyEventPathParameters | null = null): APIGatewayProxyEvent => ({
    body: JSON.stringify(body),
    headers: {},
    multiValueHeaders: {},
    httpMethod,
    isBase64Encoded: false,
    path,
    pathParameters,
    queryStringParameters: null,
    multiValueQueryStringParameters: null,
    stageVariables: null,
    requestContext: {
        accountId: '',
        apiId: '',
        authorizer: {},
        connectedAt: 0,
        connectionId: '',
        domainName: '',
        eventType: '',
        extendedRequestId: '',
        httpMethod: httpMethod,
        identity: {
            accessKey: null,
            accountId: null,
            apiKey: null,
            apiKeyId: null,
            caller: null,
            cognitoAuthenticationProvider: null,
            cognitoAuthenticationType: null,
            cognitoIdentityId: null,
            cognitoIdentityPoolId: null,
            principalOrgId: null,
            sourceIp: '',
            user: null,
            userAgent: null,
            userArn: null,
        },
        messageDirection: '',
        messageId: null,
        path: path,
        stage: '',
        requestId: '',
        requestTimeEpoch: 0,
        resourceId: '',
        resourcePath: '',
        routeKey: '',
    } as APIGatewayEventRequestContextWithAuthorizer<APIGatewayEventDefaultAuthorizerContext>,
    resource: '',
});
