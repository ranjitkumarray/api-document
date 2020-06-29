export const riskJavaScriptLibraryExample = {
    shell: [
        {
            title: "Place the following JavaScript snippet on your checkout and/or signup pages:",
            example: "<script> <br>\
                        !function(){ <br>\
                        var script = document.createElement('script'); <br>\
                        script.async = true; <br>\
                        script.src = 'https://risk.clearbit.com/v1/risk.js'; <br>\
                        var parent = document.getElementsByTagName('script')[0]; <br>\
                        parent.parentNode.insertBefore(script, parent); <br>\
                        }(); <br>\
                    </script>"
        }
    ],
    ruby: [
        {
            title: "Place the following JavaScript snippet on your checkout and/or signup pages:",
            example: "<script> <br>\
                        !function(){ <br>\
                        var script = document.createElement('script'); <br>\
                        script.async = true; <br>\
                        script.src = 'https://risk.clearbit.com/v1/risk.js'; <br>\
                        var parent = document.getElementsByTagName('script')[0]; <br>\
                        parent.parentNode.insertBefore(script, parent); <br>\
                        }(); <br>\
                    </script>"
        }
    ],
    node: [
        {
            title: "Place the following JavaScript snippet on your checkout and/or signup pages:",
            example: "<script> <br>\
                        !function(){ <br>\
                        var script = document.createElement('script'); <br>\
                        script.async = true; <br>\
                        script.src = 'https://risk.clearbit.com/v1/risk.js'; <br>\
                        var parent = document.getElementsByTagName('script')[0]; <br>\
                        parent.parentNode.insertBefore(script, parent); <br>\
                        }(); <br>\
                    </script>"
        }
    ],
    python: [
        {
            title: "Place the following JavaScript snippet on your checkout and/or signup pages:",
            example: "<script> <br>\
                        !function(){ <br>\
                        var script = document.createElement('script'); <br>\
                        script.async = true; <br>\
                        script.src = 'https://risk.clearbit.com/v1/risk.js'; <br>\
                        var parent = document.getElementsByTagName('script')[0]; <br>\
                        parent.parentNode.insertBefore(script, parent); <br>\
                        }(); <br>\
                    </script>"
        }
    ]
}

export const queryParamOne = [
    { parameter: "client_id", description: "<b style='font-size:16px; font-weight:600'>String</b><br>(required) Your application’s client ID" },
    { parameter: "redirect_uri", description: "<b style='font-size:16px; font-weight:600'>String</b> <br>(optional) URL to redirect users back to, which must start with your application’s default redirect URL." }
]
export const queryParamTwo = [
    { parameter: "client_id", description: "<b style='font-size:16px; font-weight:600'>String</b> <br>(required) Your application’s client ID" },
    { parameter: "client_secret", description: "<b style='font-size:16px; font-weight:600'>String</b> <br> (required) Your application’s client secret" },
    { parameter: "code", description: "<b style='font-size:16px; font-weight:600'>String</b> <br> (required) Your request token generated in the last step" }
]

export const riskAttributesExample = {
    shell: [
        {
            title: "Place the following JavaScript snippet on your checkout and/or signup pages:",
            example: {
                "id": "8ea0c9e6-ff59-4506-9c3c-a79ead14ba1f",
                "live": true,
                "fingerprint": false,
                "email": {
                    "valid": true,
                    "socialMatch": true,
                    "companyMatch": true,
                    "nameMatch": true,
                    "disposable": false,
                    "freeProvider": false,
                    "blacklisted": false
                },
                "address": {
                    "geoMatch": null
                },
                "ip": {
                    "proxy": false,
                    "geoMatch": false,
                    "blacklisted": false,
                    "rateLimited": false
                },
                "risk": {
                    "level": "high",
                    "score": 100,
                    "reasons": [
                        "email_ip_geo_mismatch",
                        "ip_country_greylisted",
                        "no_fingerprint_match"
                    ]
                }
            }
        }
    ],
    ruby: [
        {
            title: "Place the following JavaScript snippet on your checkout and/or signup pages:",
            example: {
                "id": "8ea0c9e6-ff59-4506-9c3c-a79ead14ba1f",
                "live": true,
                "fingerprint": false,
                "email": {
                    "valid": true,
                    "socialMatch": true,
                    "companyMatch": true,
                    "nameMatch": true,
                    "disposable": false,
                    "freeProvider": false,
                    "blacklisted": false
                },
                "address": {
                    "geoMatch": null
                },
                "ip": {
                    "proxy": false,
                    "geoMatch": false,
                    "blacklisted": false,
                    "rateLimited": false
                },
                "risk": {
                    "level": "high",
                    "score": 100,
                    "reasons": [
                        "email_ip_geo_mismatch",
                        "ip_country_greylisted",
                        "no_fingerprint_match"
                    ]
                }
            }
        }
    ],
    node: [
        {
            title: "Place the following JavaScript snippet on your checkout and/or signup pages:",
            example: {
                "id": "8ea0c9e6-ff59-4506-9c3c-a79ead14ba1f",
                "live": true,
                "fingerprint": false,
                "email": {
                    "valid": true,
                    "socialMatch": true,
                    "companyMatch": true,
                    "nameMatch": true,
                    "disposable": false,
                    "freeProvider": false,
                    "blacklisted": false
                },
                "address": {
                    "geoMatch": null
                },
                "ip": {
                    "proxy": false,
                    "geoMatch": false,
                    "blacklisted": false,
                    "rateLimited": false
                },
                "risk": {
                    "level": "high",
                    "score": 100,
                    "reasons": [
                        "email_ip_geo_mismatch",
                        "ip_country_greylisted",
                        "no_fingerprint_match"
                    ]
                }
            }
        }
    ],
    python: [
        {
            title: "Place the following JavaScript snippet on your checkout and/or signup pages:",
            example: {
                "id": "8ea0c9e6-ff59-4506-9c3c-a79ead14ba1f",
                "live": true,
                "fingerprint": false,
                "email": {
                    "valid": true,
                    "socialMatch": true,
                    "companyMatch": true,
                    "nameMatch": true,
                    "disposable": false,
                    "freeProvider": false,
                    "blacklisted": false
                },
                "address": {
                    "geoMatch": null
                },
                "ip": {
                    "proxy": false,
                    "geoMatch": false,
                    "blacklisted": false,
                    "rateLimited": false
                },
                "risk": {
                    "level": "high",
                    "score": 100,
                    "reasons": [
                        "email_ip_geo_mismatch",
                        "ip_country_greylisted",
                        "no_fingerprint_match"
                    ]
                }
            }
        }
    ]
}
export const riskAttributes=[
{attribute:"id",description:"<span style='font-size:16px; font-weight:600'>string</span><p> Internal Clearbit request ID</p>"},
{attribute:"live",description:"<span style='font-size:16px; font-weight:600'>boolean</span><p> Whether or not we’re in live mode (i.e. not using a loopback IP)</p>"},
{attribute:"fingerprint",description:"<span style='font-size:16px; font-weight:600'>boolean</span><p> Whether or not we got a fingerprint match.</p>"},
{attribute:"email.valid",description:"<span style='font-size:16px; font-weight:600'>boolean</span><p> Email is syntatically valid & MX servers are present</p>"},
{attribute:"email.socialMatch",description:"<span style='font-size:16px; font-weight:600'>boolean</span><p> Email has an associated social profile & presence</p>"},
{attribute:"email.companyMatch",description:"<span style='font-size:16px; font-weight:600'>boolean</span><p> The email’s domain has a company associated with it</p>"},
{attribute:"email.nameMatch",description:"<span style='font-size:16px; font-weight:600'>boolean</span><p> Email’s social profile name matches supplied name</p>"},
{attribute:"email.disposable",description:"<span style='font-size:16px; font-weight:600'>boolean</span><p> Email is from a disposable provider (e.g. Mailinator)</p>"},
{attribute:"email.freeProvider",description:"<span style='font-size:16px; font-weight:600'>boolean</span><p> Email is from a free provider (e.g. Gmail)</p>"},
{attribute:"email.blacklisted",description:"<span style='font-size:16px; font-weight:600'>boolean</span><p> Email has been blacklisted (i.e. flagged multiple times)</p>"},
{attribute:"address.geoMatch",description:"<span style='font-size:16px; font-weight:600'>boolean</span><p> Supplied country_code matches the country associated with the email</p>"},
{attribute:"ip.proxy",description:"<span style='font-size:16px; font-weight:600'>boolean</span><p> IP address belongs to a proxy server</p>"},
{attribute:"ip.geoMatch",description:"<span style='font-size:16px; font-weight:600'>boolean</span><p> IP address’s location matches that of the email</p>"},
{attribute:"ip.blacklisted",description:"<span style='font-size:16px; font-weight:600'>boolean</span><p> IP address has been blacklisted (i.e. flagged multiple times)</p>"},
{attribute:"ip.rateLimited",description:"<span style='font-size:16px; font-weight:600'>boolean</span><p> IP address has been ratelimited (i.e. used multiple times)</p>"},
{attribute:"risk.level",description:"<span style='font-size:16px; font-weight:600'>string</span><p> Risk level, either low, medium, or high</p>"},
{attribute:"risk.score",description:"<span style='font-size:16px; font-weight:600'>integer</span><p> Risk score out of 100</p>"},
{attribute:"risk.reasons",description:"<span style='font-size:16px; font-weight:600'>array</span><p> Array of reasons which will give you an indication about how we’ve calculated a given score.</p>"}

]