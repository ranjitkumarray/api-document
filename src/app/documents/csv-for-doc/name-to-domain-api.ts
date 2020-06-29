export const nameTpDomainAPIHttpRequestExample={
    shell: [
      {
        title: "Send requests with the company name to the API:",
        example: "curl 'https://company.clearbit.com/v1/domains/find?name=Segment' <br>\
        -u {key}:"
      },
      {
        title: "The JSON encoded response looks like this:",
        example: {
            "domain": "segment.com",
            "logo": "https://logo.clearbit.com/segment.com",
            "name": "Segment"
          }
      }
    ],
    ruby: [
        {
          title: "The JSON encoded response looks like this:",
          example: {
                "domain": "segment.com",
                "logo": "https://logo.clearbit.com/segment.com",
                "name": "Segment"
            }
        }
      ],
    node: [
        {
          title: "The JSON encoded response looks like this:",
          example: {
                "domain": "segment.com",
                "logo": "https://logo.clearbit.com/segment.com",
                "name": "Segment"
            }
        }
      ],
    python: [
        {
          title: "The JSON encoded response looks like this:",
          example: {
                "domain": "segment.com",
                "logo": "https://logo.clearbit.com/segment.com",
                "name": "Segment"
            }
        }
      ]
  }

  export const autoCompleteResponseCode=[
    
    {code:"200",description:"Successful lookup, result encoded in the response body."},
    {code:"404",description:"Company not found."},
    {code:"422",description:"Company name is invalid."}
  ]
  export const autoCompleteParams=[
        {param:"name",description:"<span style='font-size:16px; font-weight:600'>string</span><p> (required) The name of the company.</p>"}
  ]

  export const autoCompleteHttpResponse=[
    {name:"domain",description:"Website domain of the company"},
    {name:"logo",description:"URL to the logo of the company"},
    {name:"name",description:"Name of the company"}
  ]