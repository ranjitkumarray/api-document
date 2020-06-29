export const revealAttributes = [
    { attribute: "ip", description: "<span style='font-size:16px; font-weight:600'>string</span><p> IP address that was looked up</p>" },
    { attribute: "fuzzy", description: "<span style='font-size:16px; font-weight:600'>boolean</span><p> False if the company has their own dedicated ASN block, otherwise true.</p>" },
    { attribute: "domain", description: "<span style='font-size:16px; font-weight:600'>string</span><p> The matched company domain</p>" },
    { attribute: "type", description: "<span style='font-size:16px; font-weight:600'>string</span><p> The type of result (company, education, government, isp)</p>" },
    { attribute: "company	", description: "<span style='font-size:16px; font-weight:600'>object</span><p> A full company response</p>" },
    { attribute: "geoIP	", description: "<span style='font-size:16px; font-weight:600'>object</span><p> A object containing location data for lookup IP</p>" },
    { attribute: "geoIP.city", description: "<span style='font-size:16px; font-weight:600'>string</span><p> City that this IP is located in</p>" },
    { attribute: "geoIP.state", description: "<span style='font-size:16px; font-weight:600'>string</span><p> State that this IP is located in</p>" },
    { attribute: "geoIP.stateCode", description: "<span style='font-size:16px; font-weight:600'>string</span><p> State code for this IP’s state</p>" },
    { attribute: "geoIP.country", description: "<span style='font-size:16px; font-weight:600'>string</span><p> Country that this IP is located in</p>" },
    { attribute: "geoIP.countryCode", description: "<span style='font-size:16px; font-weight:600'>string</span><p> Country code for this IP’s country</p>" }
]
export const revealAttributesExample = {
    shell: [
        {
            title: "The JSON encoded response looks like this.",
            example: {
                "ip": "203.192.204.222",
                "fuzzy": true,
                "domain": "segment.com",
                "type": "company",
                "company": {
                    "name": "Segment",
                    "tags": [
                        "Software",
                        "SAAS",
                        "B2B",
                        "Information Technology & Services",
                        "Technology",
                        "Internet"
                    ],
                    "metrics": {
                        "alexaUsRank": 14014,
                        "alexaGlobalRank": 34096,
                        "employees": 180,
                        "employeesRange": "51-250",
                        "raised": 108720000
                    },
                    "...": "..."
                },
                "geoIP": {
                    "city": "San Francisco",
                    "state": "California",
                    "stateCode": "CA",
                    "country": "United States",
                    "countryCode": "US"
                }
            }
        }
    ],
    ruby: [
        {
            title: "The JSON encoded response looks like this.",
            example: {
                "ip": "203.192.204.222",
                "fuzzy": true,
                "domain": "segment.com",
                "type": "company",
                "company": {
                    "name": "Segment",
                    "tags": [
                        "Software",
                        "SAAS",
                        "B2B",
                        "Information Technology & Services",
                        "Technology",
                        "Internet"
                    ],
                    "metrics": {
                        "alexaUsRank": 14014,
                        "alexaGlobalRank": 34096,
                        "employees": 180,
                        "employeesRange": "51-250",
                        "raised": 108720000
                    },
                    "...": "..."
                },
                "geoIP": {
                    "city": "San Francisco",
                    "state": "California",
                    "stateCode": "CA",
                    "country": "United States",
                    "countryCode": "US"
                }
            }
        }
    ],
    node: [
        {
            title: "The JSON encoded response looks like this.",
            example: {
                "ip": "203.192.204.222",
                "fuzzy": true,
                "domain": "segment.com",
                "type": "company",
                "company": {
                    "name": "Segment",
                    "tags": [
                        "Software",
                        "SAAS",
                        "B2B",
                        "Information Technology & Services",
                        "Technology",
                        "Internet"
                    ],
                    "metrics": {
                        "alexaUsRank": 14014,
                        "alexaGlobalRank": 34096,
                        "employees": 180,
                        "employeesRange": "51-250",
                        "raised": 108720000
                    },
                    "...": "..."
                },
                "geoIP": {
                    "city": "San Francisco",
                    "state": "California",
                    "stateCode": "CA",
                    "country": "United States",
                    "countryCode": "US"
                }
            }
        }
    ],
    python: [
        {
            title: "The JSON encoded response looks like this.",
            example: {
                "ip": "203.192.204.222",
                "fuzzy": true,
                "domain": "segment.com",
                "type": "company",
                "company": {
                    "name": "Segment",
                    "tags": [
                        "Software",
                        "SAAS",
                        "B2B",
                        "Information Technology & Services",
                        "Technology",
                        "Internet"
                    ],
                    "metrics": {
                        "alexaUsRank": 14014,
                        "alexaGlobalRank": 34096,
                        "employees": 180,
                        "employeesRange": "51-250",
                        "raised": 108720000
                    },
                    "...": "..."
                },
                "geoIP": {
                    "city": "San Francisco",
                    "state": "California",
                    "stateCode": "CA",
                    "country": "United States",
                    "countryCode": "US"
                }
            }
        }
    ]
}

export const revealHttpRequestExample = {
    shell: [
        {
            title: "o lookup an IP address, run the following:",
            example: "curl 'https://reveal.clearbit.com/v1/companies/find?ip=203.192.204.222' <br>\
        -u {key}:"
        }
    ],
    ruby: [
        {
            title: "o lookup an IP address, run the following:",
            example: "Clearbit::Reveal.find( <br>\
            ip: '203.192.204.222' <br>\
          )"
        }
    ],
    node: [
        {
            title: "o lookup an IP address, run the following:",
            example: "var clearbit = require('clearbit')('{key}');<br>\
          <br>\
          clearbit.Reveal.find({<br>\
              ip: '203.192.204.222'<br>\
            })<br>\
            .then(function (result) {<br>\
              console.log('Result', result);<br>\
            }) <br>\
            .catch(function (err) {<br>\
              console.error(err);<br>\
            });"
        }
    ],
    python: [
        {
            title: "o lookup an IP address, run the following:",
            example: "result = clearbit.Reveal.find(  <br>  ip='203.192.204.222'<br>)<br>print result"
        }
    ]
}
export const revealHttpGetParamsOne = [
    { param: "ip", description: "<span style='font-size:16px; font-weight:600'>string</span><p>(required) IPv4 address to lookup</p>" }
]
export const revealHttpGetParamsresponseType = [
    { code: "200", description: "Successful lookup", },
    { code: "404", description: "Company not found", },
    { code: "422", description: "Invalid parameters", }
]

export const revealHttpGetParam = [
    { param: "authorization", description: '<span style="font-size:16px; font-weight:600">string</span><p> (required) Your publishable key (starts with a pk_)</p>' },
    { param: "callback", description: '<span style="font-size:16px; font-weight:600">string</span><p> (optional) A JSONP callback function to be invoked</p>' },
    { param: "variable", description: '<span style="font-size:16px; font-weight:600">string</span><p> (optional) A JavaScript variable name to be set</p>' }
]
export const revealResponseType = [
    { code: "200", description: "Successful lookup (or a JSONP or JS var response)" },
    { code: "404", description: "Company not found" }
]
export const revealJsonResponseExample = {
    shell: [
        {
            title: "A response to generate an access token looks like this:",
            example: '<script> <br> \
                    function myCallback(response) { <br> \
                        console.log(response && response.company); <br> \
                    } <br> \
                    </script> <br> \
                    <script src="https://reveal.clearbit.com/v1/companies/reveal?authorization=pk_test&callback=myCallback"></script>'
        }
    ],
    ruby: [
        {
            title: "A response to generate an access token looks like this:",
            example: '<script> <br> \
                    function myCallback(response) { <br> \
                        console.log(response && response.company); <br> \
                    } <br> \
                    </script> <br> \
                    <script src="https://reveal.clearbit.com/v1/companies/reveal?authorization=pk_test&callback=myCallback"></script>'
        }
    ],
    node: [
        {
            title: "A response to generate an access token looks like this:",
            example: '<script> <br> \
                    function myCallback(response) { <br> \
                        console.log(response && response.company); <br> \
                    } <br> \
                    </script> <br> \
                    <script src="https://reveal.clearbit.com/v1/companies/reveal?authorization=pk_test&callback=myCallback"></script>'
        }
    ],
    python: [
        {
            title: "A response to generate an access token looks like this:",
            example: '<script> <br> \
                    function myCallback(response) { <br> \
                        console.log(response && response.company); <br> \
                    } <br> \
                    </script> <br> \
                    <script src="https://reveal.clearbit.com/v1/companies/reveal?authorization=pk_test&callback=myCallback"></script>'
        }
    ]
}
export const javaScriptVariableResponseExample = {
    shell: [
        {
            title: "",
            example: '<script src="https://reveal.clearbit.com/v1/companies/reveal?authorization=pk_test&variable=myVariable"></script> <br>\
                    <script> <br>\
                    console.log(myVariable && myVariable.company) <br>\
                    </script>'
        }
    ],
    ruby: [
        {
            title: "",
            example: '<script src="https://reveal.clearbit.com/v1/companies/reveal?authorization=pk_test&variable=myVariable"></script> <br>\
                    <script> <br>\
                    console.log(myVariable && myVariable.company) <br>\
                    </script>'
        }
    ],
    node: [
        {
            title: "",
            example: '<script src="https://reveal.clearbit.com/v1/companies/reveal?authorization=pk_test&variable=myVariable"></script>  <br>\
                    <script> <br>\
                    console.log(myVariable && myVariable.company) <br>\
                    </script>'
        }
    ],
    python: [
        {
            title: "",
            example: '<script src="https://reveal.clearbit.com/v1/companies/reveal?authorization=pk_test&variable=myVariable"></script> <br>\
                    <script> <br>\
                    console.log(myVariable && myVariable.company) <br>\
                    </script>'
        }
    ]
}
