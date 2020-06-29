export const prospectorHttpRequest = [
    { param: "domain", description: "<span style='font-size:16px; font-weight:600'>string</span><br><p> (required) Domain of the company you want to search against.</p>" },
    { param: "role", description: "<span style='font-size:16px; font-weight:600'>string</span><br><p> (optional) Employment Role (view list).</p>" },
    { param: "roles[]", description: "<span style='font-size:16px; font-weight:600'>string</span><br><p> (optional) Multiple roles to filter by. You can specify this param multiple times to search for multiple roles.</p>" },
    { param: "seniority", description: "<span style='font-size:16px; font-weight:600'>string</span><br><p> (optional) Employment Seniority (view list).</p>" },
    { param: "seniorities[]", description: "<span style='font-size:16px; font-weight:600'>string</span><br><p> (optional) Multiple seniorities to filter by. You can specify this param multiple times to search for multiple seniorities.</p>" },
    { param: "title", description: "<span style='font-size:16px; font-weight:600'>string</span><br><p> (optional) Job title to filter by.</p>" },
    { param: "titles[]", description: "<span style='font-size:16px; font-weight:600'>string</span><br><p> (optional) Multiple job titles to filter by. You can specify this param multiple times to search for multiple titles.</p>" },
    { param: "city", description: "<span style='font-size:16px; font-weight:600'>string</span><br><p> (optional) City to filter by.</p>" },
    { param: "cities[]", description: "<span style='font-size:16px; font-weight:600'>string</span><br><p> (optional) Multiple cities to filter by. You can specify this param multiple times to search for multiple cities.</p>" },
    { param: "state", description: "<span style='font-size:16px; font-weight:600'>string</span><br><p> (optional) State to filter by.</p>" },
    { param: "states[]", description: "<span style='font-size:16px; font-weight:600'>string</span><br><p> (optional) Multiple states to filter by. You can specify this param multiple times to search for multiple states.</p>" },
    { param: "country", description: "<span style='font-size:16px; font-weight:600'>string</span><br><p> (optional) Country to filter by.</p>" },
    { param: "countries[]", description: "<span style='font-size:16px; font-weight:600'>string</span><br><p> (optional) Multiple countries to filter by. You can specify this param multiple times to search for multiple countries.</p>" },
    { param: "name", description: "<span style='font-size:16px; font-weight:600'>string</span><br><p> (optional) Name of an individual to filter by.</p>" },
    { param: "query", description: "<span style='font-size:16px; font-weight:600'>string</span><br><p> (optional) Search query string.</p>" },
    { param: "page", description: "<span style='font-size:16px; font-weight:600'>integer</span><br><p> Which results page to show (default is 1).</p>" },
    { param: "page_size", description: "<span style='font-size:16px; font-weight:600'>integer</span><br><p> The amount of results to return per page (default is 5, max is 20).</p>" },
    { param: "suppression", description: "<span style='font-size:16px; font-weight:600'>string</span><br><p>(optional) Set to eu to exclude records with country data in the EU. Set to eu_strict to exclude records with country data in the EU or with null country data.</p>" }

]
export const personSerchExample = {
    shell: [
        {
            title: "To search for people by domain name, run the following.",
            example: "curl 'https://prospector.clearbit.com/v1/people/search' <br> \
        -G --data-urlencode 'domain=twitter.com' <br> \
        --data-urlencode 'role=marketing'  <br> \
        -u {key}:"
        }
    ],
    ruby: [
        {
            title: "To search for people by domain name, run the following.",
            example: "people = Clearbit::Prospector.search(domain: 'twitter.com', role: 'marketing') <br> \
          <br> \
          people.each do |person| <br> \
            puts [person.name.full_name, person.title].join(' - ') <br> \
          end"
        }
    ],
    node: [
        {
            title: "To search for people by domain name, run the following.",
            example: "var clearbit = require('clearbit')('{key}'); <br> \
          <br> \
          clearbit.Prospector.search({domain: 'twitter.com', role: 'marketing'}) <br> \
            .then(function (people) { <br> \
              people.forEach(function(person){ <br> \
                console.log(person.name.fullName, person.title); <br> \
              }); <br> \
            }) <br> \
            .catch(function (err) { <br> \
              console.error(err); <br> \
            });"
        }
    ],
    python: [
        {
            title: "To search for people by domain name, run the following.",
            example: "people = clearbit.Prospector.search(domain='twitter.com', role='marketing') <br> \
          <br> \
          for person in people: <br> \
            print person['name']['fullName']"
        }
    ]
}

export const responseTypeCode = [
    { code: "200", description: "Successful lookup, person encoded in the response body." },
    { code: "422", description: "Validation error or Too many results requested. Limited to a maximun of 200 results." }

]

export const responseBody=[
{name:"page",description:"Page number for pagination"},
{name:"page_size",description:"Number of results per page"},
{name:"total",description:"Total amount of people matching the search"},
{name:"results",description:"Array of person attributes"}
]

export const responseBodyExample = {
    shell: [
        {
            title: "The JSON encoded response looks like this:",
            example: {
                "page": 1,
                "page_size": 5,
                "total": 723,
                "results": [
                    {
                        "id": "7416592A-A0D5-4AE5-ACB0-03156E444E9C",
                        "name": {
                            "givenName": "Harlow",
                            "familyName": "Ward",
                            "fullName": "Harlow Ward"
                        },
                        "title": "Co Founder at Clearbit",
                        "role": "leadership",
                        "subRole": "founder",
                        "seniority": "executive",
                        "company": {
                            "name": "Clearbit"
                        },
                        "email": "harlow@clearbit.com",
                        "verified": true,
                        "phone": "+1 415-555-1212"
                    }
                ]
            }
        }
    ],
    ruby: [
        {
            title: "The JSON encoded response looks like this:",
            example: {
                "page": 1,
                "page_size": 5,
                "total": 723,
                "results": [
                    {
                        "id": "7416592A-A0D5-4AE5-ACB0-03156E444E9C",
                        "name": {
                            "givenName": "Harlow",
                            "familyName": "Ward",
                            "fullName": "Harlow Ward"
                        },
                        "title": "Co Founder at Clearbit",
                        "role": "leadership",
                        "subRole": "founder",
                        "seniority": "executive",
                        "company": {
                            "name": "Clearbit"
                        },
                        "email": "harlow@clearbit.com",
                        "verified": true,
                        "phone": "+1 415-555-1212"
                    }
                ]
            }
        }
    ],
    node: [
        {
            title: "The JSON encoded response looks like this:",
            example: {
                "page": 1,
                "page_size": 5,
                "total": 723,
                "results": [
                    {
                        "id": "7416592A-A0D5-4AE5-ACB0-03156E444E9C",
                        "name": {
                            "givenName": "Harlow",
                            "familyName": "Ward",
                            "fullName": "Harlow Ward"
                        },
                        "title": "Co Founder at Clearbit",
                        "role": "leadership",
                        "subRole": "founder",
                        "seniority": "executive",
                        "company": {
                            "name": "Clearbit"
                        },
                        "email": "harlow@clearbit.com",
                        "verified": true,
                        "phone": "+1 415-555-1212"
                    }
                ]
            }
        }
    ],
    python: [
        {
            title: "The JSON encoded response looks like this:",
            example: {
                "page": 1,
                "page_size": 5,
                "total": 723,
                "results": [
                    {
                        "id": "7416592A-A0D5-4AE5-ACB0-03156E444E9C",
                        "name": {
                            "givenName": "Harlow",
                            "familyName": "Ward",
                            "fullName": "Harlow Ward"
                        },
                        "title": "Co Founder at Clearbit",
                        "role": "leadership",
                        "subRole": "founder",
                        "seniority": "executive",
                        "company": {
                            "name": "Clearbit"
                        },
                        "email": "harlow@clearbit.com",
                        "verified": true,
                        "phone": "+1 415-555-1212"
                    }
                ]
            }
        }
    ]
}

export const personAttributes=[
    {attribute:"id",description:"<span style='font-size:16px; font-weight:600'>string</span><br><p> Internal ID</p>"},
    {attribute:"name.givenName",description:"<span style='font-size:16px; font-weight:600'>string</span><br><p> First name of person</p>"},
    {attribute:"name.familyName",description:"<span style='font-size:16px; font-weight:600'>string</span><br><p> Last name of person</p>"},
    {attribute:"name.fullName",description:"<span style='font-size:16px; font-weight:600'>string</span><br><p> Full formatted name of person</p>"},
    {attribute:"title",description:"<span style='font-size:16px; font-weight:600'>string</span><br><p> Employment title</p>"},
    {attribute:"role",description:"<span style='font-size:16px; font-weight:600'>string</span><br><p> Employment role (view list).</p>"},
    {attribute:"subRole",description:"<span style='font-size:16px; font-weight:600'>string</span><br><p> Employment sub-role (view list).</p>"},
    {attribute:"seniority",description:"<span style='font-size:16px; font-weight:600'>string</span><br><p> Employment seniority (view list).</p>"},
    {attribute:"company.name",description:"<span style='font-size:16px; font-weight:600'>string</span><br><p> Name of Company</p>"},
    {attribute:"email",description:"<span style='font-size:16px; font-weight:600'>string</span><br><p> Corporate Email Address</p>"},
    {attribute:"verified",description:"<span style='font-size:16px; font-weight:600'>boolean</span><br><p> Do we have an exact match on email?</p>"},
    {attribute:"phone",description:"<span style='font-size:16px; font-weight:600'>string</span><br><p> Premium Feature: Direct dial phone work number (requires additional plan)</p>"}

] 
export const prospectorFields=[
    {param:"name",description:"<span style='font-size:16px; font-weight:600'>string</span><br><p> Person’s name</p>"},
    {param:"role",description:"<span style='font-size:16px; font-weight:600'>string</span><br><p> Job role</p>"},
    {param:"title",description:"<span style='font-size:16px; font-weight:600'>string</span><br><p> Job title</p>"},
    {param:"seniority",description:"<span style='font-size:16px; font-weight:600'>string</span><br><p> Job seniority</p>"},
    {param:"city",description:"<span style='font-size:16px; font-weight:600'>string</span><br><p> Long form city name</p>"},
    {param:"state",description:"<span style='font-size:16px; font-weight:600'>string</span><br><p> Two letter state code or full state name</p>"},
    {param:"country",description:"<span style='font-size:16px; font-weight:600'>string</span><br><p> Two letter country code or full country name</p>"},
    {param:"and",description:"<span style='font-size:16px; font-weight:600'>query</span><br><p> AND query (see below)</p>"},
    {param:"or",description:"<span style='font-size:16px; font-weight:600'>query</span><br><p> OR query (see below)</p>"},
    {param:"not",description:"<span style='font-size:16px; font-weight:600'>query</span><br><p> NOT query (see below)</p>"}
]