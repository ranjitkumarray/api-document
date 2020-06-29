export const accessTokenExample={
    shell: [
      {
        title: "A response to generate an access token looks like this:",
        example: {
            "access_token": "sk_123"
          }
      }
    ],
    ruby: [
        {
          title: "A response to generate an access token looks like this:",
          example: {
              "access_token": "sk_123"
            }
        }
      ],
    node: [
        {
          title: "A response to generate an access token looks like this:",
          example: {
              "access_token": "sk_123"
            }
        }
      ],
    python: [
        {
          title: "A response to generate an access token looks like this:",
          example: {
              "access_token": "sk_123"
            }
        }
      ]
  }

    export const  queryParamOne=[
        {parameter:"client_id",description:"<b style='font-size:16px; font-weight:600'>String</b><br>(required) Your application’s client ID"},
        {parameter:"redirect_uri",description:"<b style='font-size:16px; font-weight:600'>String</b> <br>(optional) URL to redirect users back to, which must start with your application’s default redirect URL."}
    ]
    export const  queryParamTwo=[
        {parameter:"client_id",description:"<b style='font-size:16px; font-weight:600'>String</b> <br>(required) Your application’s client ID"},
        {parameter:"client_secret",description:"<b style='font-size:16px; font-weight:600'>String</b> <br> (required) Your application’s client secret"},
        {parameter:"code",description:"<b style='font-size:16px; font-weight:600'>String</b> <br> (required) Your request token generated in the last step"}
    ]
    