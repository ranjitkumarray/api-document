export const descoveryAttributesExample = {
    shell: [
        {
            title: "The JSON encoded response looks like this:",
            example: {
                "total": 605410,
                "page": 1,
                "results": [
                    {
                        "name": "Clearbit",
                        "domain": "clearbit.com",
                        "//": "..."
                    }
                ]
            }
        }
    ],
    ruby: [
        {
            title: "The JSON encoded response looks like this:",
            example: {
                "total": 605410,
                "page": 1,
                "results": [
                    {
                        "name": "Clearbit",
                        "domain": "clearbit.com",
                        "//": "..."
                    }
                ]
            }
        }
    ],
    node: [
        {
            title: "The JSON encoded response looks like this:",
            example: {
                "total": 605410,
                "page": 1,
                "results": [
                    {
                        "name": "Clearbit",
                        "domain": "clearbit.com",
                        "//": "..."
                    }
                ]
            }
        }
    ],
    python: [
        {
            title: "The JSON encoded response looks like this:",
            example: {
                "total": 605410,
                "page": 1,
                "results": [
                    {
                        "name": "Clearbit",
                        "domain": "clearbit.com",
                        "//": "..."
                    }
                ]
            }
        }
    ]
}
export const descoveryAttributes = [
    { attribute: "total", description: "Total amount of companies matching the search" },
    { attribute: "page", description: "Page number for pagination" },
    { attribute: "results", description: "Array of company responses" },
]
export const urlExample = {
    shell: [
        {
            title: "Our search API lets you filter by over 30 different attributes. For example, to find all companies using Marketo that have raised over 100k run:",
            example: "curl 'https://discovery.clearbit.com/v1/companies/search' <br> \
        -G --data-urlencode 'query=and:(tech:marketo raised:100000~)' <br> \
        --data-urlencode 'sort=alexa_asc' <br> \
        -u {key}:"
        }
    ],
    ruby: [
        {
            title: "Our search API lets you filter by over 30 different attributes. For example, to find all companies using Marketo that have raised over 100k run:",
            example: "Clearbit::Discovery.search( <br> \
            query: {tech: 'marketo', raised: '100000~'}, <br> \
            sort: 'alexa_asc' <br> \
          )"
        }
    ],
    node: [
        {
            title: "Our search API lets you filter by over 30 different attributes. For example, to find all companies using Marketo that have raised over 100k run:",
            example: "clearbit.Discovery.search({query: {tech: 'marketo', raised: '100000~'}}) <br>\
          .then(function (search) { <br>\
            console.log('Results:', search.results); <br>\
          }) <br>\
          .catch(function (err) { <br>\
            console.error(err); <br>\
          });"

        }
    ],
    python: [
        {
            title: "Our search API lets you filter by over 30 different attributes. For example, to find all companies using Marketo that have raised over 100k run:",
            example: "clearbit.Discovery.search( <br> \
            query={'tech': 'marketo', 'raised': '100000~'}, <br> \
            sort='alexa_asc' <br> \
          )"
        }
    ]
}

export const responseCode = [
    { code: "200", description: "Successful lookup, search response encoded in the response body." },
    { code: "422", description: "Invalid search (request has a malformed query param)." }
]
export const paramOne = [
    { param: "query", description: "<span style='font-size:16px; font-weight:600'>string</span><br><p>Search query string.</p>" }
]
export const paramTwo = [
    { param: "page", description: "<span style='font-size:16px; font-weight:600'>integer</span><br><p> Which results page to show (default is 1).</p>" },
    { param: "page_size", description: "<span style='font-size:16px; font-weight:600'>integer</span><br><p> The amount of results to return per page.</p>" },
    { param: "limit", description: "<span style='font-size:16px; font-weight:600'>integer</span><br><p> How many paginated results to return in total.</p>" },
    { param: "sort", description: "<span style='font-size:16px; font-weight:600'>string</span><br><p> Which order results are returned in.</p>" }
]
export const paginationExample = {
    shell: [
        {
            title: "To retrieve an additional page pass the page option:",
            example: "curl 'https://discovery.clearbit.com/v1/companies/search' <br> \
        -G --data-urlencode 'query=twitter_followers:10000~'  <br> \
        --data-urlencode 'page=2'  <br> \
        -u {key}:"
        }
    ],
    ruby: [
        {
            title: "To retrieve an additional page pass the page option:",
            example: "Clearbit::Discovery.search(  <br> \
            query: {twitter_followers: '10000~'},  <br> \
            page: 2  <br> \
          )"
        }
    ],
    node: [
        {
            title: "To retrieve an additional page pass the page option:",
            example: "clearbit.Discovery.search({query: {twitter_followers: '10000~'}, page: 2})  <br> \
          .then(function (search) {  <br> \
            console.log('Results:', search.results);  <br> \
          })  <br> \
          .catch(function (err) {  <br> \
            console.error(err);  <br> \
          });"

        }
    ],
    python: [
        {
            title: "To retrieve an additional page pass the page option:",
            example: "clearbit.Discovery.search(  <br> \
            query={'twitter_followers': '10000~'},  <br> \
            page=2  <br> \
          )"
        }
    ]
}
export const sorting = [
    { sort: "score", description: "Default sort" },
    { sort: "alexa_rank", description: "Alexa ranking" },
    { sort: "employees", description: "Number of employees" },
    { sort: "market_cap", description: "Market cap for public companies" },
    { sort: "raised", description: "Amount of funding raised" },
    { sort: "twitter_followers", description: "Number of Twitter followers" }
]
export const sortingExample = {
    shell: [
        {
            title: "To sort by a specific attribute using the sort option.",
            example: "curl 'https://discovery.clearbit.com/v1/companies/search'  <br> \
        -G --data-urlencode 'query=tech:marketo' <br> \
        --data-urlencode 'sort=alexa_asc' <br> \
        -u {key}:"
        },
        {
            title: "To sort in a particular direction append _asc or _desc to the sort option",
            example: "curl 'https://discovery.clearbit.com/v1/companies/search'  <br> \
        -G --data-urlencode 'query=tech:marketo' <br> \
        --data-urlencode 'sort=alexa_asc' <br> \
        -u {key}:"
        }
    ],
    ruby: [
        {
            title: "To sort by a specific attribute using the sort option.",
            example: "Clearbit::Discovery.search( <br> \
            query: {tech: 'marketo'}, <br> \
            sort: 'alexa_asc' <br> \
          )"
        },
        {
            title: "To sort in a particular direction append _asc or _desc to the sort option:",
            example: "Clearbit::Discovery.search( <br> \
              query: {tech: 'marketo'}, <br> \
              sort: 'alexa_asc' <br> \
            )"
        }
    ],
    node: [
        {
            title: "To sort by a specific attribute using the sort option.",
            example: "clearbit.Discovery.search({query: {tech: 'marketo'}, sort: 'alexa_asc'}) <br> \
          .then(function (search) { <br> \
            console.log('Results:', search.results); <br> \
          }) <br> \
          .catch(function (err) { <br> \
            console.error(err); <br> \
          });"

        },
        {
            title: "To sort in a particular direction append _asc or _desc to the sort option:",
            example: "clearbit.Discovery.search({query: {tech: 'marketo'}, sort: 'alexa_asc'}) <br> \
            .then(function (search) { <br> \
              console.log('Results:', search.results); <br> \
            }) <br> \
            .catch(function (err) { <br> \
              console.error(err); <br> \
            });"

        }
    ],
    python: [
        {
            title: "To sort by a specific attribute using the sort option.",
            example: "clearbit.Discovery.search( <br> \
            query={'tech': 'marketo'}, <br> \
            sort='alexa_asc' <br> \
          )"
        },
        {
            title: "To sort in a particular direction append _asc or _desc to the sort option:",
            example: "clearbit.Discovery.search( <br> \
              query={'tech': 'marketo'}, <br> \
              sort='alexa_asc' <br> \
            )"
        }
    ]
}

export const dataType = [
    { type: "string", description: "Letters" },
    { type: "integer", description: "Number" },
    { type: "range", description: "Range of numbers separated by a tilde (~).Omit the first or last integer to scan the full range." }

]
export const dataTypeExample = {
    shell: [
        {
            title: "As you can see, you can escape values by using quotes. You can also include sub queries by using parenthesis:",
            example: " and:(tech:stripe raised:10000~)"
        }
    ],
    ruby: [
        {
            title: "As you can see, you can escape values by using quotes. You can also include sub queries by using parenthesis:",
            example: " and:(tech:stripe raised:10000~)"
        },
        {
            title: "Alternatively, rather than using a string search query, you can also pass an array of hashes:",
            example: "Clearbit::Discovery.search( <br> \
            query: [{tech: 'marketo'}, {alexa_rank: '0~1000'}] <br> \
          )"
        }
    ],
    node: [
        {
            title: "As you can see, you can escape values by using quotes. You can also include sub queries by using parenthesis:",
            example: " and:(tech:stripe raised:10000~)"
        },
        {
            title: "Alternatively, rather than using a string search query, you can also pass an array of objects:",
            example: "clearbit.Discovery.search({query: [{tech: 'marketo'}, {alexa_rank: '0~1000'}]}) <br> \
          .then(function (search) { <br> \
            console.log('Results:', search.results); <br> \
          }) <br> \
          .catch(function (err) { <br> \
            console.error(err); <br> \
          });"

        }
    ],
    python: [
        {
            title: "As you can see, you can escape values by using quotes. You can also include sub queries by using parenthesis:",
            example: " and:(tech:stripe raised:10000~)"
        },
        {
            title: "Alternatively, rather than using a string search query, you can also pass an array of objects:",
            example: "clearbit.Discovery.search( <br> \
            query=[{'tech': 'marketo'}, {'raised': '100000~'}] <br> \
          )"
        }
    ]
}
export const dataTypeForProtester = [{ type: "string", description: "Letters" }]
export const protesterDataTypeExample={
    shell: [
        {
            title: "Queries are space separated key colon values. For example to find people in a leadership role, at the executive level, and based in SF the query would look like this:",
            example: 'role:leadership seniority:executive city:"San Francisco"'
        },
        {
            title: "As you can see, you can escape values by using quotes. You can also include sub queries by using parenthesis:",
            example: '  and:(name:Alex city:"Boston")'
        }
    ],
    ruby: [
        {
            title: "Queries are space separated key colon values. For example to find people in a leadership role, at the executive level, and based in SF the query would look like this:",
            example: 'role:leadership seniority:executive city:"San Francisco"'
        },
        {
            title: "As you can see, you can escape values by using quotes. You can also include sub queries by using parenthesis:",
            example: '  and:(name:Alex city:"Boston")'
        }
    ],
    node: [
        {
            title: "Queries are space separated key colon values. For example to find people in a leadership role, at the executive level, and based in SF the query would look like this:",
            example: 'role:leadership seniority:executive city:"San Francisco"'
        },
        {
            title: "As you can see, you can escape values by using quotes. You can also include sub queries by using parenthesis:",
            example: '  and:(name:Alex city:"Boston")'
        }
    ],
    python: [
        {
            title: "Queries are space separated key colon values. For example to find people in a leadership role, at the executive level, and based in SF the query would look like this:",
            example: 'role:leadership seniority:executive city:"San Francisco"'
        },
        {
            title: "As you can see, you can escape values by using quotes. You can also include sub queries by using parenthesis:",
            example: '  and:(name:Alex city:"Boston")'
        }
    ]
}
export const fields = [
    { param: "domain", description: "<span style='font-size:16px; font-weight:600'>string</span><br><p> Exact domain match</p>" },
    { param: "name", description: "<span style='font-size:16px; font-weight:600'>string</span><br><p> Fuzzy name match</p>" },
    { param: "description", description: "<span style='font-size:16px; font-weight:600'>string</span><br><p> Fuzzy description match</p>" },
    { param: "and", description: "<span style='font-size:16px; font-weight:600'>query</span><br><p> AND query (see below)</p>" },
    { param: "or", description: "<span style='font-size:16px; font-weight:600'>query</span><br><p> OR query (see below)</p>" },
    { param: "not", description: "<span style='font-size:16px; font-weight:600'>query</span><br><p> NOT query (see below)</p>" },
    { param: "alexa_rank", description: "<span style='font-size:16px; font-weight:600'>range</span><br><p> Global Alexa rank</p>" },
    { param: "alexa_us_rank", description: "<span style='font-size:16px; font-weight:600'>string</span><br><p> US Alexa rank</p>" },
    { param: "location", description: "<span style='font-size:16px; font-weight:600'>string</span><br><p> Fuzzy long form address match</p>" },
    { param: "state", description: "<span style='font-size:16px; font-weight:600'>string</span><br><p> Two letter state code</p>" },
    { param: "city", description: "<span style='font-size:16px; font-weight:600'>string</span><br><p> Long form city name of headquarters</p>" },
    { param: "country", description: "<span style='font-size:16px; font-weight:600'>string</span><br><p> Two letter country code of headquarters</p>" },
    { param: "crunchbase", description: "<span style='font-size:16px; font-weight:600'>string</span><br><p> Crunchbase handle</p>" },
    { param: "employees", description: "<span style='font-size:16px; font-weight:600'>range</span><br><p> Headcount</p>" },
    { param: "facebook", description: "<span style='font-size:16px; font-weight:600'>string</span><br><p> Facebook handle</p>" },
    { param: "linkedin", description: "<span style='font-size:16px; font-weight:600'>string</span><br><p> LinkedIn handle</p>" },
    { param: "twitter", description: "<span style='font-size:16px; font-weight:600'>string</span><br><p> Twitter handle</p>" },
    { param: "twitter_followers", description: "<span style='font-size:16px; font-weight:600'>range</span><br><p> Number of Twitter followers</p>" },
    { param: "twitter_following", description: "<span style='font-size:16px; font-weight:600'>range</span><br><p> Number of Twitter friends</p>" },
    { param: "market_cap", description: "<span style='font-size:16px; font-weight:600'>range</span><br><p> Market cap</p>" },
    { param: "ticker", description: "<span style='font-size:16px; font-weight:600'>string</span><br><p> Stock ticker symbol</p>" },
    { param: "raised", description: "<span style='font-size:16px; font-weight:600'>range</span><br><p> Amount of funding raised</p>" },
    { param: "industry", description: "<span style='font-size:16px; font-weight:600'>string</span><br><p> Categorization industry</p>" },
    { param: "sub_industry", description: "<span style='font-size:16px; font-weight:600'>string</span><br><p> Categorization sub-industry (see a complete list)</p>" },
    { param: "sector", description: "<span style='font-size:16px; font-weight:600'>string</span><br><p> Categorization sector (see a complete list)</p>" },
    { param: "tag", description: "<span style='font-size:16px; font-weight:600'>string</span><br><p> Categorization tags (see a complete list)</p>" },
    { param: "tech", description: "<span style='font-size:16px; font-weight:600'>string</span><br><p> Tech used (see below)</p>" },
    { param: "type", description: "<span style='font-size:16px; font-weight:600'>string</span><br><p> Company type (education/government/nonprofit/private/public/personal)</p>" },
    { param: "has", description: "<span style='font-size:16px; font-weight:600'>string</span><br><p> Only return companies who have data for the given field. Aliased as ‘exists’</p>" },
    { param: "hasnt", description: "<span style='font-size:16px; font-weight:600'>string</span><br><p> Only return companies who don’t have data for the given field. Aliased as ‘missing’" }
]

export const andOrNotQueriesExample = {
    shell: [
        {
            title: "By default queries use an AND search - results have to satisfy all parameters. To change this behavior use the or query type and pass a sub-query:",
            example: "  or:(twitter_followers:10000~ type:nonprofit)"
        },
        {
            title: "For example, to find all companies that have at least 10000 Twitter followers or are charities:",
            example: " curl 'https://discovery.clearbit.com/v1/companies/search' <br> \
        -G --data-urlencode 'query=or:(twitter_followers:10000~ type:nonprofit)'  <br> \
        -u {key}:"
        },
        {
            title: "Negation works by prefixing a query with not:",
            example: "   not:(tech:google_analytics type:public)"
        },
        {
            title: "For example, to find all companies that are not public and don’t use Google Analytics:",
            example: " curl 'https://discovery.clearbit.com/v1/companies/search' <br> \
        -G --data-urlencode 'query=not:(tech:google_analytics type:public)'  <br> \
        -u {key}:"
        }
    ],
    ruby: [
        {
            title: "By default queries use an AND search - results have to satisfy all parameters. To change this behavior use the or query type and pass a sub-query:",
            example: "  or:(twitter_followers:10000~ type:nonprofit)"
        },
        {
            title: "For example, to find all companies that have at least 10000 Twitter followers or are charities:",
            example: " Clearbit::Discovery.search( <br> \
                query: {or: [{twitter_followers: '10000~'}, {type: 'nonprofit'}]} <br> \
                )"
        },
        {
            title: "Negation works by prefixing a query with not:",
            example: "   not:(tech:google_analytics type:public)"
        },
        {
            title: "For example, to find all companies that are not public and don’t use Google Analytics:",
            example: " Clearbit::Discovery.search( <br> \
                query: {not: [{tech: 'google_analytics'}, {type: 'public'}]} <br> \
                )"
        }
    ],
    node: [
        {
            title: "By default queries use an AND search - results have to satisfy all parameters. To change this behavior use the or query type and pass a sub-query:",
            example: "  or:(twitter_followers:10000~ type:nonprofit)"
        },
        {
            title: "For example, to find all companies that have at least 10000 Twitter followers or are charities:",
            example: " clearbit.Discovery.search({query: {or: [{twitter_followers: '10000~'}, {type: 'nonprofit'}]}})  <br> \
            .then(function (search) { <br> \
              console.log('Results:', search.results); <br> \
            }) <br> \
            .catch(function (err) { <br> \
              console.error(err); <br> \
            });"
        },
        {
            title: "Negation works by prefixing a query with not:",
            example: "   not:(tech:google_analytics type:public)"
        },
        {
            title: "For example, to find all companies that are not public and don’t use Google Analytics:",
            example: " clearbit.Discovery.search({query: {not: [{tech: 'google_analytics'}, {type: 'public'}]}}) <br> \
            .then(function (search) { <br> \
              console.log('Results:', search.results); <br> \
            }) <br> \
            .catch(function (err) { <br> \
              console.error(err); <br> \
            });"
        }
    ],
    python: [
        {
            title: "By default queries use an AND search - results have to satisfy all parameters. To change this behavior use the or query type and pass a sub-query:",
            example: "  or:(twitter_followers:10000~ type:nonprofit)"
        },
        {
            title: "For example, to find all companies that have at least 10000 Twitter followers or are charities:",
            example: "clearbit.Discovery.search( <br> \
                query={'or': [{'twitter_followers': '10000~'}, {'type': 'nonprofit'}]} <br> \
                )"
        },
        {
            title: "Negation works by prefixing a query with not:",
            example: "   not:(tech:google_analytics type:public)"
        },
        {
            title: "For example, to find all companies that are not public and don’t use Google Analytics:",
            example: " clearbit.Discovery.search( <br> \
                query={'not': [{'tech': 'google_analytics'}, {'type': 'public'}]} <br> \
                )"
        }
    ]
}
export const techQueriesExample = {
    shell: [
        {
            title: "To search for companies using particular front-end technologies use the tech query:",
            example: " tech:stripe tech:customer_io tech:segment"
        },
        {
            title: "For example, to find any companies that use Google Apps sorted by Alexa score:",
            example: " curl 'https://discovery.clearbit.com/v1/companies/search' <br> \
            -G --data-urlencode 'query=tech:google_apps' <br> \
            --data-urlencode 'sort=alexa_asc' <br> \
            -u {key}:"
        }
    ],
    ruby: [
        {
            title: "To search for companies using particular front-end technologies use the tech query:",
            example: " tech:stripe tech:customer_io tech:segment"
        },
        {
            title: "For example, to find any companies that use Google Apps sorted by Alexa score:",
            example: " Clearbit::Discovery.search( <br> \
                query: {tech: 'google_apps'}, <br> \
                sort: 'alexa_asc' <br> \
              )"
        }
    ],
    node: [
        {
            title: "To search for companies using particular front-end technologies use the tech query:",
            example: " tech:stripe tech:customer_io tech:segment"
        },
        {
            title: "For example, to find any companies that use Google Apps sorted by Alexa score:",
            example: " clearbit.Discovery.search({query: {tech: 'google_apps'}}}) <br> \
            .then(function (search) { <br> \
              console.log('Results:', search.results); <br> \
            }) <br> \
            .catch(function (err) { <br> \
              console.error(err); <br> \
            });"
        }
    ],
    python: [
        {
            title: "To search for companies using particular front-end technologies use the tech query:",
            example: " tech:stripe tech:customer_io tech:segment"
        },
        {
            title: "For example, to find any companies that use Google Apps sorted by Alexa score:",
            example: " clearbit.Discovery.search( <br> \
                query={'tech': 'google_apps'}, <br> \
                sort='alexa_asc' <br> \
              )"
        }
    ]
}