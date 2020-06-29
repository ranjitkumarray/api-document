export const attributesOne=[
    {attribute:"id" , description:"<span style='font-size:16px; font-weight:600'>string </span><br> <p>Internal ID</p>"},
    {attribute:"name.givenName" , description:"<span style='font-size:16px; font-weight:600'>string </span><br> <p>First name of person (if found)</p>"},
    {attribute:"name.familyName" , description:"<span style='font-size:16px; font-weight:600'>string </span><br> <p>Last name of person (if found)</p>"},
    {attribute:"name.fullName" , description:"<span style='font-size:16px; font-weight:600'>string </span><br> <p>Full formatted name of person. Sometimes this will be present even if the givenName or familyName aren’t available</p>"},
    {attribute:"location" , description:"<span style='font-size:16px; font-weight:600'>string </span><br> <p>The most accurate location we have</p>"},
    {attribute:"timeZone" , description:"<span style='font-size:16px; font-weight:600'>string </span><br> <p>The timezone for the person’s location</p>"},
    {attribute:"utcOffset" , description:"<span style='font-size:16px; font-weight:600'>integer</span><br> <p>The offset from UTC in hours in the person’s location</p>"},
    {attribute:"geo.city" , description:"<span style='font-size:16px; font-weight:600'>string </span><br> <p>Normalized city based on location</p>"},
    {attribute:"geo.state" , description:"<span style='font-size:16px; font-weight:600'>string </span><br> <p>Normalized state based on location</p>"},
    {attribute:"geo.country" , description:"<span style='font-size:16px; font-weight:600'>string </span><br> <p>Normalized two letter country code based on location</p>"},
    {attribute:"geo.lat" , description:"<span style='font-size:16px; font-weight:600'>float</span><br> <p>General latitude based on location</p>"},
    {attribute:"geo.lng" , description:"<span style='font-size:16px; font-weight:600'>float</span><br> <p>General longitude based on location</p>"},
    {attribute:"bio" , description:"<span style='font-size:16px; font-weight:600'>string </span><br> <p>The most accurate bio we have</p>"},
    {attribute:"site" , description:"<span style='font-size:16px; font-weight:600'>string </span><br> <p>The person’s website</p>"},
    {attribute:"avatar" , description:"<span style='font-size:16px; font-weight:600'>string </span><br> <p>The best avatar url we have</p>"},
    {attribute:"employment.name" , description:"<span style='font-size:16px; font-weight:600'>string </span><br> <p>Company name</p>"},
    {attribute:"employment.title" , description:"<span style='font-size:16px; font-weight:600'>string </span><br> <p>Title at Company</p>"},
    {attribute:"employment.role" , description:"<span style='font-size:16px; font-weight:600'>string </span><br> <p>Role at Company</p>"},
    {attribute:"employment.subRole" , description:"<span style='font-size:16px; font-weight:600'>string </span><br> <p>Sub-role at Company</p>"},
    {attribute:"employment.seniority" , description:"<span style='font-size:16px; font-weight:600'>string </span><br> <p>Seniority at Company</p>"},
    {attribute:"employment.domain" , description:"<span style='font-size:16px; font-weight:600'>string </span><br> <p>Company domain</p>"},
    {attribute:"facebook.handle" , description:"<span style='font-size:16px; font-weight:600'>string </span><br> <p>Facebook ID or screen name</p>"},
    {attribute:"github.handle" , description:"<span style='font-size:16px; font-weight:600'>string </span><br> <p>GitHub handle</p>"},
    {attribute:"github.id"	, description:"<span style='font-size:16px; font-weight:600'>integer</span><br> <p>GitHub ID</p>"},
    {attribute:"github.avatar" , description:"<span style='font-size:16px; font-weight:600'>string </span><br> <p>GitHub avatar</p>"},
    {attribute:"github.company" , description:"<span style='font-size:16px; font-weight:600'>string </span><br> <p>GitHub company</p>"},
    {attribute:"github.blog" , description:"<span style='font-size:16px; font-weight:600'>string </span><br> <p>GitHub blog url</p>"},
    {attribute:"github.followers" , description:"<span style='font-size:16px; font-weight:600'>string </span><br> <p>Count of GitHub followers</p>"},
    {attribute:"github.following" , description:"<span style='font-size:16px; font-weight:600'>string </span><br> <p>Count of GitHub following</p>"},
    {attribute:"twitter.handle" , description:"<span style='font-size:16px; font-weight:600'>string </span><br> <p>Twitter screen name</p>"},
    {attribute:"twitter.id	" , description:"<span style='font-size:16px; font-weight:600'>integer</span><br> <p>Twitter ID</p>"},
    {attribute:"twitter.followers" , description:"<span style='font-size:16px; font-weight:600'>integer</span><br> <p>Count of Twitter followers</p>"},
    {attribute:"twitter.following" , description:"<span style='font-size:16px; font-weight:600'>integer</span><br> <p>Count of Twitter friends</p>"},
    {attribute:"twitter.location" , description:"<span style='font-size:16px; font-weight:600'>string </span><br> <p>Twitter location</p>"},
    {attribute:"twitter.site" , description:"<span style='font-size:16px; font-weight:600'>string </span><br> <p>Twitter site</p>"},
    {attribute:"twitter.statuses" , description:"<span style='font-size:16px; font-weight:600'>integer</span><br> <p>Tweet count</p>"},
    {attribute:"twitter.favorites" , description:"<span style='font-size:16px; font-weight:600'>integer</span><br> <p>, Favorite count</p>"},
    {attribute:"twitter.avatar" , description:"<span style='font-size:16px; font-weight:600'>string </span><br> <p>HTTP Twitter avatar</p>"},
    {attribute:"linkedin.handle" , description:"<span style='font-size:16px; font-weight:600'>string </span><br> <p>LinkedIn url (i.e. /pub/alex-maccaw/78/929/ab5)</p>"},
    {attribute:"googleplus.handle" , description:"<span style='font-size:16px; font-weight:600'>string </span><br> <p>Google Plus handle</p>"},
    {attribute:"gravatar.handle" , description:"<span style='font-size:16px; font-weight:600'>string </span><br> <p>Gravatar handle</p>"},
    {attribute:"gravatar.urls" , description:"<span style='font-size:16px; font-weight:600'>array</span><br> <p>Array of URLs from Gravatar</p>"},
    {attribute:"gravatar.avatar" , description:"<span style='font-size:16px; font-weight:600'>string </span><br> <p>Gravatar main avatar url.</p>"},
    {attribute:"gravatar.avatars" , description:"<span style='font-size:16px; font-weight:600'>string </span><br> <p>Array of objects containing a avatar url, and a type (i.e. thumbnail)</p>"},
    {attribute:"fuzzy" , description:"<span style='font-size:16px; font-weight:600'>boolean</span> <br> <p>Indicating whether or not the lookup is a fuzzy or exact search</p>"},
    {attribute:"emailProvider" , description:"<span style='font-size:16px; font-weight:600'>boolean</span> <br> <p>is the email domain associated with a free email provider (i.e. Gmail)?</p>"},
    {attribute:"indexedAt" , description:"<span style='font-size:16px; font-weight:600'>string </span><br> <p>date The time at which we indexed this data"}
    ]
export const attributesOneExample={
    shell: [
      {
        title: "The JSON encoded response looks like:",
        example:{
            "id": "d54c54ad-40be-4305-8a34-0ab44710b90d",
            "name": {
              "fullName": "Alex MacCaw",
              "givenName": "Alex",
              "familyName": "MacCaw"
            },
            "email": "alex@alexmaccaw.com",
            "location": "San Francisco, CA, US",
            "timeZone": "America/Los_Angeles",
            "utcOffset": -8,
            "geo": {
              "city": "San Francisco",
              "state": "California",
              "stateCode": "CA",
              "country": "United States",
              "countryCode": "US",
              "lat": 37.7749295,
              "lng": -122.4194155
            },
            "bio": "O'Reilly author, software engineer & traveller. Founder of https://clearbit.com",
            "site": "http://alexmaccaw.com",
            "avatar": "https://d1ts43dypk8bqh.cloudfront.net/v1/avatars/d54c54ad-40be-4305-8a34-0ab44710b90d",
            "employment": {
              "domain": "clearbit.com",
              "name": "Clearbit",
              "title": "Co-founder, CEO",
              "role": "leadership",
              "subRole": "ceo",
              "seniority": "executive"
            },
            "facebook": {
              "handle": "amaccaw"
            },
            "github": {
              "handle": "maccman",
              "avatar": "https://avatars.githubusercontent.com/u/2142?v=2",
              "company": "Clearbit",
              "blog": "http://alexmaccaw.com",
              "followers": 2932,
              "following": 94
            },
            "twitter": {
              "handle": "maccaw",
              "id": "2006261",
              "bio": "O'Reilly author, software engineer & traveller. Founder of https://clearbit.com",
              "followers": 15248,
              "following": 1711,
              "location": "San Francisco",
              "site": "http://alexmaccaw.com",
              "avatar": "https://pbs.twimg.com/profile_images/1826201101/297606_10150904890650705_570400704_21211347_1883468370_n.jpeg"
            },
            "linkedin": {
              "handle": "pub/alex-maccaw/78/929/ab5"
            },
            "googleplus": {
              "handle": null
            },
            "gravatar": {
              "handle": "maccman",
              "urls": [
                {
                  "value": "http://alexmaccaw.com",
                  "title": "Personal Website"
                }
              ],
              "avatar": "http://2.gravatar.com/avatar/994909da96d3afaf4daaf54973914b64",
              "avatars": [
                {
                  "url": "http://2.gravatar.com/avatar/994909da96d3afaf4daaf54973914b64",
                  "type": "thumbnail"
                }
              ]
            },
            "fuzzy": false,
            "emailProvider": false,
            "indexedAt": "2016-11-07T00:00:00.000Z"
          }
      }
    ],
    ruby: [
        {
          title: "The JSON encoded response looks like:",
          example: {
            "id": "d54c54ad-40be-4305-8a34-0ab44710b90d",
            "name": {
              "fullName": "Alex MacCaw",
              "givenName": "Alex",
              "familyName": "MacCaw"
            },
            "email": "alex@alexmaccaw.com",
            "location": "San Francisco, CA, US",
            "timeZone": "America/Los_Angeles",
            "utcOffset": -8,
            "geo": {
              "city": "San Francisco",
              "state": "California",
              "stateCode": "CA",
              "country": "United States",
              "countryCode": "US",
              "lat": 37.7749295,
              "lng": -122.4194155
            },
            "bio": "O'Reilly author, software engineer & traveller. Founder of https://clearbit.com",
            "site": "http://alexmaccaw.com",
            "avatar": "https://d1ts43dypk8bqh.cloudfront.net/v1/avatars/d54c54ad-40be-4305-8a34-0ab44710b90d",
            "employment": {
              "domain": "clearbit.com",
              "name": "Clearbit",
              "title": "Co-founder, CEO",
              "role": "leadership",
              "subRole": "ceo",
              "seniority": "executive"
            },
            "facebook": {
              "handle": "amaccaw"
            },
            "github": {
              "handle": "maccman",
              "avatar": "https://avatars.githubusercontent.com/u/2142?v=2",
              "company": "Clearbit",
              "blog": "http://alexmaccaw.com",
              "followers": 2932,
              "following": 94
            },
            "twitter": {
              "handle": "maccaw",
              "id": "2006261",
              "bio": "O'Reilly author, software engineer & traveller. Founder of https://clearbit.com",
              "followers": 15248,
              "following": 1711,
              "location": "San Francisco",
              "site": "http://alexmaccaw.com",
              "avatar": "https://pbs.twimg.com/profile_images/1826201101/297606_10150904890650705_570400704_21211347_1883468370_n.jpeg"
            },
            "linkedin": {
              "handle": "pub/alex-maccaw/78/929/ab5"
            },
            "googleplus": {
              "handle": null
            },
            "gravatar": {
              "handle": "maccman",
              "urls": [
                {
                  "value": "http://alexmaccaw.com",
                  "title": "Personal Website"
                }
              ],
              "avatar": "http://2.gravatar.com/avatar/994909da96d3afaf4daaf54973914b64",
              "avatars": [
                {
                  "url": "http://2.gravatar.com/avatar/994909da96d3afaf4daaf54973914b64",
                  "type": "thumbnail"
                }
              ]
            },
            "fuzzy": false,
            "emailProvider": false,
            "indexedAt": "2016-11-07T00:00:00.000Z"
          }
        }
      ],
    node: [
        {
          title: "The JSON encoded response looks like:",
          example: {
            "id": "d54c54ad-40be-4305-8a34-0ab44710b90d",
            "name": {
              "fullName": "Alex MacCaw",
              "givenName": "Alex",
              "familyName": "MacCaw"
            },
            "email": "alex@alexmaccaw.com",
            "location": "San Francisco, CA, US",
            "timeZone": "America/Los_Angeles",
            "utcOffset": -8,
            "geo": {
              "city": "San Francisco",
              "state": "California",
              "stateCode": "CA",
              "country": "United States",
              "countryCode": "US",
              "lat": 37.7749295,
              "lng": -122.4194155
            },
            "bio": "O'Reilly author, software engineer & traveller. Founder of https://clearbit.com",
            "site": "http://alexmaccaw.com",
            "avatar": "https://d1ts43dypk8bqh.cloudfront.net/v1/avatars/d54c54ad-40be-4305-8a34-0ab44710b90d",
            "employment": {
              "domain": "clearbit.com",
              "name": "Clearbit",
              "title": "Co-founder, CEO",
              "role": "leadership",
              "subRole": "ceo",
              "seniority": "executive"
            },
            "facebook": {
              "handle": "amaccaw"
            },
            "github": {
              "handle": "maccman",
              "avatar": "https://avatars.githubusercontent.com/u/2142?v=2",
              "company": "Clearbit",
              "blog": "http://alexmaccaw.com",
              "followers": 2932,
              "following": 94
            },
            "twitter": {
              "handle": "maccaw",
              "id": "2006261",
              "bio": "O'Reilly author, software engineer & traveller. Founder of https://clearbit.com",
              "followers": 15248,
              "following": 1711,
              "location": "San Francisco",
              "site": "http://alexmaccaw.com",
              "avatar": "https://pbs.twimg.com/profile_images/1826201101/297606_10150904890650705_570400704_21211347_1883468370_n.jpeg"
            },
            "linkedin": {
              "handle": "pub/alex-maccaw/78/929/ab5"
            },
            "googleplus": {
              "handle": null
            },
            "gravatar": {
              "handle": "maccman",
              "urls": [
                {
                  "value": "http://alexmaccaw.com",
                  "title": "Personal Website"
                }
              ],
              "avatar": "http://2.gravatar.com/avatar/994909da96d3afaf4daaf54973914b64",
              "avatars": [
                {
                  "url": "http://2.gravatar.com/avatar/994909da96d3afaf4daaf54973914b64",
                  "type": "thumbnail"
                }
              ]
            },
            "fuzzy": false,
            "emailProvider": false,
            "indexedAt": "2016-11-07T00:00:00.000Z"
          }
        }
      ],
    python: [
        {
          title: "The JSON encoded response looks like:",
          example: {
            "id": "d54c54ad-40be-4305-8a34-0ab44710b90d",
            "name": {
              "fullName": "Alex MacCaw",
              "givenName": "Alex",
              "familyName": "MacCaw"
            },
            "email": "alex@alexmaccaw.com",
            "location": "San Francisco, CA, US",
            "timeZone": "America/Los_Angeles",
            "utcOffset": -8,
            "geo": {
              "city": "San Francisco",
              "state": "California",
              "stateCode": "CA",
              "country": "United States",
              "countryCode": "US",
              "lat": 37.7749295,
              "lng": -122.4194155
            },
            "bio": "O'Reilly author, software engineer & traveller. Founder of https://clearbit.com",
            "site": "http://alexmaccaw.com",
            "avatar": "https://d1ts43dypk8bqh.cloudfront.net/v1/avatars/d54c54ad-40be-4305-8a34-0ab44710b90d",
            "employment": {
              "domain": "clearbit.com",
              "name": "Clearbit",
              "title": "Co-founder, CEO",
              "role": "leadership",
              "subRole": "ceo",
              "seniority": "executive"
            },
            "facebook": {
              "handle": "amaccaw"
            },
            "github": {
              "handle": "maccman",
              "avatar": "https://avatars.githubusercontent.com/u/2142?v=2",
              "company": "Clearbit",
              "blog": "http://alexmaccaw.com",
              "followers": 2932,
              "following": 94
            },
            "twitter": {
              "handle": "maccaw",
              "id": "2006261",
              "bio": "O'Reilly author, software engineer & traveller. Founder of https://clearbit.com",
              "followers": 15248,
              "following": 1711,
              "location": "San Francisco",
              "site": "http://alexmaccaw.com",
              "avatar": "https://pbs.twimg.com/profile_images/1826201101/297606_10150904890650705_570400704_21211347_1883468370_n.jpeg"
            },
            "linkedin": {
              "handle": "pub/alex-maccaw/78/929/ab5"
            },
            "googleplus": {
              "handle": null
            },
            "gravatar": {
              "handle": "maccman",
              "urls": [
                {
                  "value": "http://alexmaccaw.com",
                  "title": "Personal Website"
                }
              ],
              "avatar": "http://2.gravatar.com/avatar/994909da96d3afaf4daaf54973914b64",
              "avatars": [
                {
                  "url": "http://2.gravatar.com/avatar/994909da96d3afaf4daaf54973914b64",
                  "type": "thumbnail"
                }
              ]
            },
            "fuzzy": false,
            "emailProvider": false,
            "indexedAt": "2016-11-07T00:00:00.000Z"
          }
        }
      ]
  }

export const httpGetParams=[   
    {param:"webhook_id",	description:"<span style='font-size:16px; font-weight:600'>string</span><br><p> Custom identifier for the webhook request.</p>"},
    {param:"subscribe",	description:"<span style='font-size:16px; font-weight:600'>boolean</span> <br> <p> Set to true to subscribe to the changes to the person.</p>"},
    {param:"suppression",	description:"<span style='font-size:16px; font-weight:600'>string</span><br><p> Set to eu to exclude person records with country data in the EU. Set to eu_strict to exclude person records with country data in the EU or with null country data.</p>"}
]
export const supportedParameters=[
    {param:"email" , description:"<span style='font-size:16px; font-weight:600'>string </span> <br> <p>(required) The email address to look up.</p>"},
    {param:"webhook_url" , description:"<span style='font-size:16px; font-weight:600'>string </span> <br> <p>A webhook URL that results will be sent to.</p>"},
    {param:"given_name" , description:"<span style='font-size:16px; font-weight:600'>string </span> <br> <p>First name of person.</p>"},
    {param:"family_name" , description:"<span style='font-size:16px; font-weight:600'>string </span> <br> <p>Last name of person. If you have this, passing this is strongly recommended to improve match rates.</p>"},
    {param:"ip_address" , description:"<span style='font-size:16px; font-weight:600'>string </span> <br> <p>IP address of the person. If you have this, passing this is strongly recommended to improve match rates.</p>"},
    {param:"location" , description:"<span style='font-size:16px; font-weight:600'>string </span> <br> <p>The city or country where the person resides.</p>"},
    {param:"company" , description:"<span style='font-size:16px; font-weight:600'>string </span> <br> <p>The name of the person’s employer.</p>"},
    {param:"company_domain" , description:"<span style='font-size:16px; font-weight:600'>string </span> <br> <p>The domain for the person’s employer.</p>"},
    {param:"linkedin" , description:"<span style='font-size:16px; font-weight:600'>string </span> <br> <p>The LinkedIn URL for the person.</p>"},
    {param:"twitter" , description:"<span style='font-size:16px; font-weight:600'>string </span> <br> <p>The Twitter handle for the person.</p>"},
    {param:"facebook" , description:"<span style='font-size:16px; font-weight:600'>string </span> <br> <p>The Facebook URL for the person.</p>"},
      
] 
export const responseCode=[
    {code:"200", description:"Successful lookup, person & company encoded in the response body."},
    {code:"202", description:"Asynchronously looking up the person & company."},
    {code:"404", description:"Neither the Person or the Company were found."}
]
export const combinedApiExample={
    shell: [
      {
        title: "To lookup both a company and person based on an email address:",
        example: "curl 'https://person-stream.clearbit.com/v2/combined/find?email=alex@clearbit.com' <br> \
        -u {key}:"
      },
      {
        title: "The stream option ensures that the request blocks until Clearbit has found some data on both the person & company. For cached information this will return in the region of 300 milliseconds, for uncached requests 2-4 seconds. If speed is key, you can omit the stream option and try the request again later (if you receive a pending response). Alternatively you can use our webhook API.",
        example: "curl 'https://person.clearbit.com/v2/combined/find?email=alex@clearbit.com' <br> \
        -u {key}:"
      },
      {
        title: "The API response object looks like the following. Note that either the ‘person’ or ‘company’ attribute can be nil if not found. For a full look at the attributes returned, see either the Person or Company attribute sections.",
        example: {
            "person": {
              "id": "d54c54ad-40be-4305-8a34-0ab44710b90d",
              "name": {
                "fullName": "Alex MacCaw",
                "givenName": "Alex",
                "familyName": "MacCaw"
              },
              "email": "alex@clearbit.com",
              "//": "..."
            },
            "company": {
              "id": "c5a6a9c5-303a-455a-935c-9dffcd2ed756",
              "name": "Clearbit",
              "legalName": "APIHub, Inc",
              "domain": "clearbit.com",
              "//": "..."
            }
          }
      }
    ],
    ruby: [
        {
          title: "To lookup both a company and person based on an email address:",
          example: "response = Clearbit::Enrichment.find(email: 'alex@clearbit.com', stream: true) <br> \
          <br> \
          if person = response.person <br> \
            puts person.name.fullName <br> \
          end <br> \
          <br> \
          if company = response.company <br> \
            puts company.name <br> \
          end"
        },
        {
        title: "The stream option ensures that the request blocks until Clearbit has found some data on both the person & company. For cached information this will return in the region of 300 milliseconds, for uncached requests 2-4 seconds. If speed is key, you can omit the stream option and try the request again later (if you receive a pending response). Alternatively you can use our webhook API.",
        example: "response = Clearbit::Enrichment.find(email: 'alex@clearbit.com') <br> \
        <br> \
        if response.pending? <br> \
          # Lookup queued - try again later <br> \
        end <br> \
        <br> \
        if person = response.person <br> \
          puts person.name.fullName <br> \
        end <br> \
        <br> \
        if company = response.company <br> \
          puts company.name <br> \
        end "
        },
        {
            title: "The API response object looks like the following. Note that either the ‘person’ or ‘company’ attribute can be nil if not found. For a full look at the attributes returned, see either the Person or Company attribute sections.",
            example: {
                "person": {
                  "id": "d54c54ad-40be-4305-8a34-0ab44710b90d",
                  "name": {
                    "fullName": "Alex MacCaw",
                    "givenName": "Alex",
                    "familyName": "MacCaw"
                  },
                  "email": "alex@clearbit.com",
                  "//": "..."
                },
                "company": {
                  "id": "c5a6a9c5-303a-455a-935c-9dffcd2ed756",
                  "name": "Clearbit",
                  "legalName": "APIHub, Inc",
                  "domain": "clearbit.com",
                  "//": "..."
                }
            }
        }
      ],
    node: [
        {
          title: "To lookup both a company and person based on an email address:",
          example: "var clearbit = require('clearbit')('{key}'); <br> \
          <br> \
          clearbit.Enrichment.find({email: 'alex@clearbit.com', stream: true}) <br> \
            .then(function (response) { <br> \
              var person  = response.person; <br> \
              var company = response.company; <br> \
              <br> \
              console.log('Name: ', person && person.name.fullName); <br> \
            }) <br> \
            .catch(function (err) { <br> \
              console.error(err); <br> \
            });"
        },
        {
            title: "The stream option ensures that the request blocks until Clearbit has found some data on both the person & company. For cached information this will return in the region of 300 milliseconds, for uncached requests 2-4 seconds. If speed is key, you can omit the stream option and try the request again later (if you receive a pending response). Alternatively you can use our webhook API.",
            example: "var clearbit = require('clearbit')('{key}'); <br> \
            <br> \
            clearbit.Enrichment.find({email: 'alex@clearbit.com'}) <br> \
              .then(function (response) { <br> \
                var person  = response.person; <br> \
                var company = response.company; <br> \
                <br> \
                console.log('Name: ', person && person.name.fullName); <br> \
              }) <br> \
              .catch(clearbit.Enrichment.QueuedError, function (err) { <br> \
                // Lookup is queued <br> \
                console.log(err); <br> \
              }) <br> \
              .catch(function (err) { <br> \
                console.error(err); <br> \
              });"
          },
          {
              title: "The API response object looks like the following. Note that either the ‘person’ or ‘company’ attribute can be nil if not found. For a full look at the attributes returned, see either the Person or Company attribute sections.",
              example: {
                  "person": {
                    "id": "d54c54ad-40be-4305-8a34-0ab44710b90d",
                    "name": {
                      "fullName": "Alex MacCaw",
                      "givenName": "Alex",
                      "familyName": "MacCaw"
                    },
                    "email": "alex@clearbit.com",
                    "//": "..."
                  },
                  "company": {
                    "id": "c5a6a9c5-303a-455a-935c-9dffcd2ed756",
                    "name": "Clearbit",
                    "legalName": "APIHub, Inc",
                    "domain": "clearbit.com",
                    "//": "..."
                  }
                }
          }
      ],
    python: [
        {
          title: "To lookup both a company and person based on an email address:",
          example: "response = clearbit.Enrichment.find(email='alex@clearbit.com', stream=True) <br> \
          <br> \
          if response['person'] is not None: <br> \
            print response['person']['name']['fullName'] <br> \
            <br> \
          if response['company'] is not None: <br> \
            print response['company']['name']" 
        },
        {
            title: "The stream option ensures that the request blocks until Clearbit has found some data on both the person & company. For cached information this will return in the region of 300 milliseconds, for uncached requests 2-4 seconds. If speed is key, you can omit the stream option and try the request again later (if you receive a pending response). Alternatively you can use our webhook API.",
            example: "response = clearbit.Enrichment.find(email='alex@clearbit.com') <br> \
            <br> \
            if 'pending' in response: <br> \
              # Lookup queued - try again later <br> \
              <br> \
            if 'person' in response: <br> \
              print response['person']['name']['fullName'] <br> \
              <br> \
            if 'company' in response: <br> \
              print response['company']['name']"
          },
          {
              title: "The API response object looks like the following. Note that either the ‘person’ or ‘company’ attribute can be nil if not found. For a full look at the attributes returned, see either the Person or Company attribute sections.",
              example: {
                  "person": {
                    "id": "d54c54ad-40be-4305-8a34-0ab44710b90d",
                    "name": {
                      "fullName": "Alex MacCaw",
                      "givenName": "Alex",
                      "familyName": "MacCaw"
                    },
                    "email": "alex@clearbit.com",
                    "//": "..."
                  },
                  "company": {
                    "id": "c5a6a9c5-303a-455a-935c-9dffcd2ed756",
                    "name": "Clearbit",
                    "legalName": "APIHub, Inc",
                    "domain": "clearbit.com",
                    "//": "..."
                  }
                }
          }
      ]
  }

  export const attributesSecondExample={
    shell: [
      {
        title: "The JSON encoded response looks like:",
        example: {
            "id": "3f5d6a4e-c284-4f78-bfdf-7669b45af907",
            "name": "Uber",
            "legalName": "Uber Technologies, Inc.",
            "domain": "uber.com",
            "domainAliases": [
              "uber.org",
              "ubercab.com"
            ],
            "site": {
              "phoneNumbers": [],
              "emailAddresses": [
                "domains@uber.com"
              ]
            },
            "category": {
              "sector": "Information Technology",
              "industryGroup": "Software & Services",
              "industry": "Internet Software & Services",
              "subIndustry": "Internet Software & Services",
              "sicCode": "47",
              "naicsCode": "51"
            },
            "tags": [
              "Technology",
              "Marketplace",
              "Mobile",
              "B2C",
              "Ground Transportation",
              "Transportation",
              "Internet"
            ],
            "description": "Get a taxi, private car or rideshare from your mobile phone. Uber connects you with a driver in minutes. Use our app in cities around the world.",
            "foundedYear": 2009,
            "location": "1455 Market St, San Francisco, CA 94103, USA",
            "timeZone": "America/Los_Angeles",
            "utcOffset": -7,
            "geo": {
              "streetNumber": "1455",
              "streetName": "Market Street",
              "subPremise": null,
              "city": "San Francisco",
              "postalCode": "94103",
              "state": "California",
              "stateCode": "CA",
              "country": "United States",
              "countryCode": "US",
              "lat": 37.7752315,
              "lng": -122.4175278
            },
            "logo": "https://logo.clearbit.com/uber.com",
            "facebook": {
              "handle": "uber"
            },
            "linkedin": {
              "handle": "company/uber-com"
            },
            "twitter": {
              "handle": "Uber",
              "id": "19103481",
              "bio": "Evolving the way the world moves by seamlessly connecting riders to drivers through our app. Question, concern, or praise? Tweet at @Uber_Support.",
              "followers": 570351,
              "following": 377,
              "location": "Global",
              "site": "http://t.co/11eIV5LX3Z",
              "avatar": "https://pbs.twimg.com/profile_images/697242369154940928/p9jxYqy5_normal.png"
            },
            "crunchbase": {
              "handle": "organization/uber"
            },
            "emailProvider": false,
            "type": "private",
            "ticker": null,
            "identifiers": {
              "usEIN": "452647441"
            },
            "phone": null,
            "indexedAt": "2016-11-07T00:00:00.000Z",
            "metrics": {
              "alexaUsRank": 544,
              "alexaGlobalRank": 943,
              "employees": 20313,
              "employeesRange": "10k-50k",
              "marketCap": null,
              "raised": 10610000000,
              "annualRevenue": null,
              "estimatedAnnualRevenue": "$1B-$10B",
              "fiscalYearEnd": 12
            },
            "tech": [
              "optimizely",
              "tealium",
              "atlassian_confluence",
              "workday",
              "talend",
              "oracle_peoplesoft",
              "salesforce",
              "teradata",
              "apache_kafka",
              "aws_dynamodb",
              "grafana",
              "factset",
              "dropbox"
            ],
            "techCategories": [
              "analytics",
              "advertising",
              "productivity",
              "human_capital_management",
              "data_management",
              "business_management",
              "crm",
              "monitoring"
            ],
            "parent": {
              "domain": null
            },
            "ultimateParent": {
              "domain": null
            }
          }
      }
    ],
    ruby: [
        {
          title: "The JSON encoded response looks like:",
          example: {
            "id": "3f5d6a4e-c284-4f78-bfdf-7669b45af907",
            "name": "Uber",
            "legalName": "Uber Technologies, Inc.",
            "domain": "uber.com",
            "domainAliases": [
              "uber.org",
              "ubercab.com"
            ],
            "site": {
              "phoneNumbers": [],
              "emailAddresses": [
                "domains@uber.com"
              ]
            },
            "category": {
              "sector": "Information Technology",
              "industryGroup": "Software & Services",
              "industry": "Internet Software & Services",
              "subIndustry": "Internet Software & Services",
              "sicCode": "47",
              "naicsCode": "51"
            },
            "tags": [
              "Technology",
              "Marketplace",
              "Mobile",
              "B2C",
              "Ground Transportation",
              "Transportation",
              "Internet"
            ],
            "description": "Get a taxi, private car or rideshare from your mobile phone. Uber connects you with a driver in minutes. Use our app in cities around the world.",
            "foundedYear": 2009,
            "location": "1455 Market St, San Francisco, CA 94103, USA",
            "timeZone": "America/Los_Angeles",
            "utcOffset": -7,
            "geo": {
              "streetNumber": "1455",
              "streetName": "Market Street",
              "subPremise": null,
              "city": "San Francisco",
              "postalCode": "94103",
              "state": "California",
              "stateCode": "CA",
              "country": "United States",
              "countryCode": "US",
              "lat": 37.7752315,
              "lng": -122.4175278
            },
            "logo": "https://logo.clearbit.com/uber.com",
            "facebook": {
              "handle": "uber"
            },
            "linkedin": {
              "handle": "company/uber-com"
            },
            "twitter": {
              "handle": "Uber",
              "id": "19103481",
              "bio": "Evolving the way the world moves by seamlessly connecting riders to drivers through our app. Question, concern, or praise? Tweet at @Uber_Support.",
              "followers": 570351,
              "following": 377,
              "location": "Global",
              "site": "http://t.co/11eIV5LX3Z",
              "avatar": "https://pbs.twimg.com/profile_images/697242369154940928/p9jxYqy5_normal.png"
            },
            "crunchbase": {
              "handle": "organization/uber"
            },
            "emailProvider": false,
            "type": "private",
            "ticker": null,
            "identifiers": {
              "usEIN": "452647441"
            },
            "phone": null,
            "indexedAt": "2016-11-07T00:00:00.000Z",
            "metrics": {
              "alexaUsRank": 544,
              "alexaGlobalRank": 943,
              "employees": 20313,
              "employeesRange": "10k-50k",
              "marketCap": null,
              "raised": 10610000000,
              "annualRevenue": null,
              "estimatedAnnualRevenue": "$1B-$10B",
              "fiscalYearEnd": 12
            },
            "tech": [
              "optimizely",
              "tealium",
              "atlassian_confluence",
              "workday",
              "talend",
              "oracle_peoplesoft",
              "salesforce",
              "teradata",
              "apache_kafka",
              "aws_dynamodb",
              "grafana",
              "factset",
              "dropbox"
            ],
            "techCategories": [
              "analytics",
              "advertising",
              "productivity",
              "human_capital_management",
              "data_management",
              "business_management",
              "crm",
              "monitoring"
            ],
            "parent": {
              "domain": null
            },
            "ultimateParent": {
              "domain": null
            }
          }
        }
      ],
    node: [
        {
          title: "The JSON encoded response looks like:",
          example: {
            "id": "3f5d6a4e-c284-4f78-bfdf-7669b45af907",
            "name": "Uber",
            "legalName": "Uber Technologies, Inc.",
            "domain": "uber.com",
            "domainAliases": [
              "uber.org",
              "ubercab.com"
            ],
            "site": {
              "phoneNumbers": [],
              "emailAddresses": [
                "domains@uber.com"
              ]
            },
            "category": {
              "sector": "Information Technology",
              "industryGroup": "Software & Services",
              "industry": "Internet Software & Services",
              "subIndustry": "Internet Software & Services",
              "sicCode": "47",
              "naicsCode": "51"
            },
            "tags": [
              "Technology",
              "Marketplace",
              "Mobile",
              "B2C",
              "Ground Transportation",
              "Transportation",
              "Internet"
            ],
            "description": "Get a taxi, private car or rideshare from your mobile phone. Uber connects you with a driver in minutes. Use our app in cities around the world.",
            "foundedYear": 2009,
            "location": "1455 Market St, San Francisco, CA 94103, USA",
            "timeZone": "America/Los_Angeles",
            "utcOffset": -7,
            "geo": {
              "streetNumber": "1455",
              "streetName": "Market Street",
              "subPremise": null,
              "city": "San Francisco",
              "postalCode": "94103",
              "state": "California",
              "stateCode": "CA",
              "country": "United States",
              "countryCode": "US",
              "lat": 37.7752315,
              "lng": -122.4175278
            },
            "logo": "https://logo.clearbit.com/uber.com",
            "facebook": {
              "handle": "uber"
            },
            "linkedin": {
              "handle": "company/uber-com"
            },
            "twitter": {
              "handle": "Uber",
              "id": "19103481",
              "bio": "Evolving the way the world moves by seamlessly connecting riders to drivers through our app. Question, concern, or praise? Tweet at @Uber_Support.",
              "followers": 570351,
              "following": 377,
              "location": "Global",
              "site": "http://t.co/11eIV5LX3Z",
              "avatar": "https://pbs.twimg.com/profile_images/697242369154940928/p9jxYqy5_normal.png"
            },
            "crunchbase": {
              "handle": "organization/uber"
            },
            "emailProvider": false,
            "type": "private",
            "ticker": null,
            "identifiers": {
              "usEIN": "452647441"
            },
            "phone": null,
            "indexedAt": "2016-11-07T00:00:00.000Z",
            "metrics": {
              "alexaUsRank": 544,
              "alexaGlobalRank": 943,
              "employees": 20313,
              "employeesRange": "10k-50k",
              "marketCap": null,
              "raised": 10610000000,
              "annualRevenue": null,
              "estimatedAnnualRevenue": "$1B-$10B",
              "fiscalYearEnd": 12
            },
            "tech": [
              "optimizely",
              "tealium",
              "atlassian_confluence",
              "workday",
              "talend",
              "oracle_peoplesoft",
              "salesforce",
              "teradata",
              "apache_kafka",
              "aws_dynamodb",
              "grafana",
              "factset",
              "dropbox"
            ],
            "techCategories": [
              "analytics",
              "advertising",
              "productivity",
              "human_capital_management",
              "data_management",
              "business_management",
              "crm",
              "monitoring"
            ],
            "parent": {
              "domain": null
            },
            "ultimateParent": {
              "domain": null
            }
          }
        }
      ],
    python: [
        {
          title: "The JSON encoded response looks like:",
          example: {
            "id": "3f5d6a4e-c284-4f78-bfdf-7669b45af907",
            "name": "Uber",
            "legalName": "Uber Technologies, Inc.",
            "domain": "uber.com",
            "domainAliases": [
              "uber.org",
              "ubercab.com"
            ],
            "site": {
              "phoneNumbers": [],
              "emailAddresses": [
                "domains@uber.com"
              ]
            },
            "category": {
              "sector": "Information Technology",
              "industryGroup": "Software & Services",
              "industry": "Internet Software & Services",
              "subIndustry": "Internet Software & Services",
              "sicCode": "47",
              "naicsCode": "51"
            },
            "tags": [
              "Technology",
              "Marketplace",
              "Mobile",
              "B2C",
              "Ground Transportation",
              "Transportation",
              "Internet"
            ],
            "description": "Get a taxi, private car or rideshare from your mobile phone. Uber connects you with a driver in minutes. Use our app in cities around the world.",
            "foundedYear": 2009,
            "location": "1455 Market St, San Francisco, CA 94103, USA",
            "timeZone": "America/Los_Angeles",
            "utcOffset": -7,
            "geo": {
              "streetNumber": "1455",
              "streetName": "Market Street",
              "subPremise": null,
              "city": "San Francisco",
              "postalCode": "94103",
              "state": "California",
              "stateCode": "CA",
              "country": "United States",
              "countryCode": "US",
              "lat": 37.7752315,
              "lng": -122.4175278
            },
            "logo": "https://logo.clearbit.com/uber.com",
            "facebook": {
              "handle": "uber"
            },
            "linkedin": {
              "handle": "company/uber-com"
            },
            "twitter": {
              "handle": "Uber",
              "id": "19103481",
              "bio": "Evolving the way the world moves by seamlessly connecting riders to drivers through our app. Question, concern, or praise? Tweet at @Uber_Support.",
              "followers": 570351,
              "following": 377,
              "location": "Global",
              "site": "http://t.co/11eIV5LX3Z",
              "avatar": "https://pbs.twimg.com/profile_images/697242369154940928/p9jxYqy5_normal.png"
            },
            "crunchbase": {
              "handle": "organization/uber"
            },
            "emailProvider": false,
            "type": "private",
            "ticker": null,
            "identifiers": {
              "usEIN": "452647441"
            },
            "phone": null,
            "indexedAt": "2016-11-07T00:00:00.000Z",
            "metrics": {
              "alexaUsRank": 544,
              "alexaGlobalRank": 943,
              "employees": 20313,
              "employeesRange": "10k-50k",
              "marketCap": null,
              "raised": 10610000000,
              "annualRevenue": null,
              "estimatedAnnualRevenue": "$1B-$10B",
              "fiscalYearEnd": 12
            },
            "tech": [
              "optimizely",
              "tealium",
              "atlassian_confluence",
              "workday",
              "talend",
              "oracle_peoplesoft",
              "salesforce",
              "teradata",
              "apache_kafka",
              "aws_dynamodb",
              "grafana",
              "factset",
              "dropbox"
            ],
            "techCategories": [
              "analytics",
              "advertising",
              "productivity",
              "human_capital_management",
              "data_management",
              "business_management",
              "crm",
              "monitoring"
            ],
            "parent": {
              "domain": null
            },
            "ultimateParent": {
              "domain": null
            }
          }
        }
      ]
  }
  export const attributesSecond=[
    {attribute:"id"	, description:"<span style='font-size:16px; font-weight:600'>string</span><br><p> Internal ID</p>"},
    {attribute:"name"	, description:"<span style='font-size:16px; font-weight:600'>string</span><br><p> Name of company</p>"},
    {attribute:"legalName"	, description:"<span style='font-size:16px; font-weight:600'>string</span><br><p> Legal name of company</p>"},
    {attribute:"domain"	, description:"<span style='font-size:16px; font-weight:600'>string</span><br><p> Domain of company’s website</p>"},
    {attribute:"domainAliases",description:"<span style='font-size:16px; font-weight:600'>array</span><br><p> List of domains also used by the company</p>"},
    {attribute:"site.phoneNumbers",description:"<span style='font-size:16px; font-weight:600'>array</span><br><p> List of phone numbers mentioned on the company’s website</p>"},
    {attribute:"site.emailAddresses",description:"<span style='font-size:16px; font-weight:600'>array</span><br><p> List of email addresses mentioned on the company’s website</p>"},
    {attribute:"tags",description:"<span style='font-size:16px; font-weight:600'>array</span><br><p> List of market categories (see a complete list)</p>"},
    {attribute:"category.sector"	, description:"<span style='font-size:16px; font-weight:600'>string</span><br><p> Broad sector (see a complete list)</p>"},
    {attribute:"category.industryGroup"	, description:"<span style='font-size:16px; font-weight:600'>string</span><br><p> Industry group (see a complete list)</p>"},
    {attribute:"category.industry"	, description:"<span style='font-size:16px; font-weight:600'>string</span><br><p> Industry (see a complete list)</p>"},
    {attribute:"category.subIndustry"	, description:"<span style='font-size:16px; font-weight:600'>string</span><br><p> Sub industry (see a complete list)</p>"},
    {attribute:"category.sicCode"	, description:"<span style='font-size:16px; font-weight:600'>string</span><br><p> Two digit category SIC code</p>"},
    {attribute:"category.naicsCode"	, description:"<span style='font-size:16px; font-weight:600'>string</span><br><p> Two digit category NAICS code</p>"},
    {attribute:"description"	, description:"<span style='font-size:16px; font-weight:600'>string</span><br><p> Description of the company</p>"},
    {attribute:"foundedYear" , description:"<span style='font-size:16px; font-weight:600'>integer</span> <br><p>Year company was founded</p>"},
    {attribute:"location"	, description:"<span style='font-size:16px; font-weight:600'>string</span><br><p> Address of company</p>"},
    {attribute:"timeZone"	, description:"<span style='font-size:16px; font-weight:600'>string</span><br><p> The timezone for the company’s location</p>"},
    {attribute:"utcOffset" , description:"<span style='font-size:16px; font-weight:600'>integer</span> <br><p>The offset from UTC in hours in the company’s location</p>"},
    {attribute:"geo.streetNumber"	, description:"<span style='font-size:16px; font-weight:600'>string</span><br><p> Headquarters street number</p>"},
    {attribute:"geo.streetName"	, description:"<span style='font-size:16px; font-weight:600'>string</span><br><p> Headquarters street name</p>"},
    {attribute:"geo.subPremise"	, description:"<span style='font-size:16px; font-weight:600'>string</span><br><p> Headquarters suite number</p>"},
    {attribute:"geo.city"	, description:"<span style='font-size:16px; font-weight:600'>string</span><br><p> Headquarters city name</p>"},
    {attribute:"geo.state"	, description:"<span style='font-size:16px; font-weight:600'>string</span><br><p> Headquarters state name</p>"},
    {attribute:"geo.stateCode"	, description:"<span style='font-size:16px; font-weight:600'>string</span><br><p> Headquarters two character state code</p>"},
    {attribute:"geo.postalCode"	, description:"<span style='font-size:16px; font-weight:600'>string</span><br><p> Headquarters postal/zip code</p>"},
    {attribute:"geo.country"	, description:"<span style='font-size:16px; font-weight:600'>string</span><br><p> Headquarters country name</p>"},
    {attribute:"geo.countryCode"	, description:"<span style='font-size:16px; font-weight:600'>string</span><br><p> Headquarters two character country code</p>"},
    {attribute:"geo.lat" , description:"<span style='font-size:16px; font-weight:600'>float</span><br><p> Headquarters latitude</p>"},
    {attribute:"geo.lng" , description:"<span style='font-size:16px; font-weight:600'>float</span><br><p> Headquarters longitude</p>"},
    {attribute:"identifiers.usEIN"	, description:"<span style='font-size:16px; font-weight:600'>string</span><br><p> US Employer Identification Number</p>"},
    {attribute:"metrics.raised" , description:"<span style='font-size:16px; font-weight:600'>integer</span> <br><p>Total amount raised</p>"},
    {attribute:"metrics.alexaUsRank" , description:"<span style='font-size:16px; font-weight:600'>integer</span> <br><p>Alexa’s US site rank</p>"},
    {attribute:"metrics.alexaGlobalRank" , description:"<span style='font-size:16px; font-weight:600'>integer</span> <br><p>Alexa’s global site rank</p>"},
    {attribute:"metrics.employees" , description:"<span style='font-size:16px; font-weight:600'>integer</span> <br><p>Amount of employees</p>"},
    {attribute:"metrics.employeesRange"	, description:"<span style='font-size:16px; font-weight:600'>string</span><br><p> Employees range (see a complete list)</p>"},
    {attribute:"metrics.marketCap" , description:"<span style='font-size:16px; font-weight:600'>integer</span> <br><p>Market Cap</p>"},
    {attribute:"metrics.annualRevenue" , description:"<span style='font-size:16px; font-weight:600'>integer</span> <br><p>Annual Revenue (public companies only)</p>"},
    {attribute:"metrics.estimatedAnnualRevenue"	, description:"<span style='font-size:16px; font-weight:600'>string</span><br><p> Estimated annual revenue range (see a complete list)</p>"},
    {attribute:"metrics.fiscalYearEnd" , description:"<span style='font-size:16px; font-weight:600'>integer</span> <br><p>Month that the fiscal year ends (1-indexed)</p>"},
    {attribute:"facebook.handle"	, description:"<span style='font-size:16px; font-weight:600'>string</span><br><p> Company’s Facebook ID</p>"},
    {attribute:"linkedin.handle"	, description:"<span style='font-size:16px; font-weight:600'>string</span><br><p> Company’s Linkedin URL</p>"},
    {attribute:"twitter.handle"	, description:"<span style='font-size:16px; font-weight:600'>string</span><br><p> Twitter screen name</p>"},
    {attribute:"twitter.id" , description:"<span style='font-size:16px; font-weight:600'>integer</span> <br><p>Twitter ID</p>"},
    {attribute:"twitter.bio"	, description:"<span style='font-size:16px; font-weight:600'>string</span><br><p> Twitter Bio</p>"},
    {attribute:"twitter.followers" , description:"<span style='font-size:16px; font-weight:600'>integer</span> <br><p>Count of Twitter followers</p>"},
    {attribute:"twitter.following" , description:"<span style='font-size:16px; font-weight:600'>integer</span> <br><p>Count of Twitter friends</p>"},
    {attribute:"twitter.location"	, description:"<span style='font-size:16px; font-weight:600'>string</span><br><p> Twitter location</p>"},
    {attribute:"twitter.site"	, description:"<span style='font-size:16px; font-weight:600'>string</span><br><p> Twitter site</p>"},
    {attribute:"twitter.avatar"	, description:"<span style='font-size:16px; font-weight:600'>string</span><br><p> HTTP Twitter avatar</p>"},
    {attribute:"crunchbase.handle"	, description:"<span style='font-size:16px; font-weight:600'>string</span><br><p> Crunchbase handle</p>"},
    {attribute:"logo"	, description:"<span style='font-size:16px; font-weight:600'>string</span><br><p> SRC of company logo</p>"},
    {attribute:"emailProvider	boolean is the domain associated with a free email provider (i.e. Gmail)?</p>"},
    {attribute:"type"	, description:"<span style='font-size:16px; font-weight:600'>string</span><br><p> The company’s type, either education, government, nonprofit, private, public, or personal.</p>"},
    {attribute:"phone"	, description:"<span style='font-size:16px; font-weight:600'>string</span><br><p> International headquarters phone number</p>"},
    {attribute:"tech",description:"<span style='font-size:16px; font-weight:600'>array</span><br><p>Array of technology tags</p>"},
    {attribute:"techCategories",description:"<span style='font-size:16px; font-weight:600'>array</span><br><p>Array of technology categories used by the company</p>"},
    {attribute:"parent.domain"	, description:"<span style='font-size:16px; font-weight:600'>string</span><br><p> The domain of the parent company (if any)</p>"},
    {attribute:"ultimateParent.domain"	, description:"<span style='font-size:16px; font-weight:600'>string</span><br><p> The domain of the ultimate parent company (if any)</p>"},
    {attribute:"indexedAt"	, description:"<span style='font-size:16px; font-weight:600'>string</span><br><p> date The time at which we indexed this dat"}
  ]
export const emailLookupExample={
    shell: [
      {
        title: "To look up a person by email address, run the following. The command will either return a 404 (in which case the person wasn’t found), a 202 indicating the lookup has been queued, or a JSON object containing the relevant person.",
        example: "curl 'https://person.clearbit.com/v2/people/find?email=alex@alexmaccaw.com&company=Clearbit' <br> \
        -u {key}:"
      },
      {
        title: "If you’d rather the request blocked until we find something (up to 60 seconds for uncached emails, but usually in the order of 10 seconds), then you can use our streaming API:",
        example: "curl 'https://person-stream.clearbit.com/v2/people/find?email=alex@alexmaccaw.com' <br> \
        -u {key}:"
      }
    ],
    ruby: [
        {
          title: "To look up a person by email address, run the following. The call will either return nil (in which case a person wasn’t found), a blank object that responds to ‘pending?’, in which case the lookup is queued, or the relevant person object.",
          example: "person = Clearbit::Enrichment::Person.find(email: 'alex@alexmaccaw.com', company: 'Clearbit') <br> \
            <br> \
          if person && !person.pending? <br> \
            puts 'Name: #{person.name.fullName}' <br> \
          end"
        },
        {
        title: "If you’d rather the request blocked until we find something (up to 60 seconds for uncached emails, but usually in the order of 10 seconds), then you can use our streaming API:",
        example: "person = Clearbit::Person.find(email: 'alex@alexmaccaw.com', company: 'Clearbit', stream: true) <br> \
        <br> \
        if person <br> \
          puts 'Name: #{person.name.full_name}' <br> \
        end"
        }
      ],
    node: [
        {
          title: "To look up a person by email address, run the following. Note that if the call to pending() returns true the lookup is queued—you should the lookup again later or alternatively use our webhook API.",
          example: "var clearbit = require('clearbit')('{key}');  <br> \
          var Person   = clearbit.person; <br> \
          <br> \
          Person.find({email: 'alex@alexmaccaw.com', company: 'Clearbit'}) <br> \
            .then(function (person) { <br> \
              console.log('Name: ', person.name.fullName); <br> \
            }) <br> \
            .catch(Person.QueuedError, function (err) { <br> \
              // Lookup is queued - try again later <br> \
              console.log(err); <br> \
            }) <br> \
            .catch(Person.NotFoundError, function (err) {  <br> \
              // Person could not be found <br> \
              console.log(err); <br> \
            }) <br> \
            .catch(function (err) {  <br> \
              console.error(err); <br> \
            });"
        },
        {
            title: "If you’d rather the request blocked until we find something (up to 60 seconds for uncached emails, but usually in the order of 10 seconds), then you can use our streaming API:",
            example: "var clearbit = require('clearbit')('{key}');  <br> \
            <br> \
            clearbit.Person.find({email: 'segment.com', company: 'Clearbit', stream: true}) <br> \
              .then(function (person) { <br> \
                console.log('Name: ', person.name.fullName); <br> \
              });"
          }
      ],
    python: [
        {
          title: "To look up a person by email address, run the following. The call will either return None (in which case a person wasn’t found), a dict { ‘pending’: true }, in which case the lookup is queued, or the relevant person dict.",
          example: "person = clearbit.Person.find(email='alex@alexmaccaw.com', company='Clearbit') <br> \
          <br> \
          if person != None and 'pending' not in person: <br> \
              print 'Name: ' + person['name']['fullName'] "
        },
        {
            title: "If you’d rather the request blocked until we find something (up to 60 seconds for uncached emails, but usually in the order of 10 seconds), then you can use our streaming API:",
            example: "person = clearbit.Person.find(email='alex@alexmaccaw.com', company='Clearbit', stream=True) <br> \
            if person != None: <br> \
              print 'Name: ' + person['name']['fullName']"
          }
      ]
  }

  export const subscribeExample={
    shell: [
      {
        title: "Subscribe to a person’s updates by passing the ‘subscribe’ parameter.",
        example: "curl 'https://person.clearbit.com/v2/people/find?email=alex@alexmaccaw.com&subscribe=true' <br> \
        -u {key}:"
      },
    ],
    ruby: [
        {
          title: "Subscribe to a person’s updates by passing the ‘subscribe’ parameter.",
          example: "Clearbit::Enrichment::Person.find(email: 'alex@alexmaccaw.com', subscribe: true)"
        }
      ],
    node: [
        {
          title: "Subscribe to a person’s updates by passing the ‘subscribe’ parameter.",
          example: "var clearbit = require('clearbit')('{key}'); <br> \
          <br> \
          clearbit.Person.find({email: 'alex@clearbit.com', stream: true}) <br> \
            .then(function (person) { <br> \
              console.log('Name: ', person.name.fullName); <br> \
            });"
        }
      ],
    python: [
        {
          title: "Subscribe to a person’s updates by passing the ‘subscribe’ parameter.",
          example: "clearbit.Person.find(email='alex@alexmaccaw.com', subscribe=True)"
        }
      ]
  }
  export const flagingExample={
    shell: [
      {
        title: "To flag a person’s data as incorrect",
        example: "curl 'https://person.clearbit.com/v1/people/d54c54ad-40be-4305-8a34-0ab44710b90d/flag' <br> \
        -XPOST <br> \
        -d 'given_name=Alexander' <br> \
        -d 'employment_title=The Great' <br> \
        -u {key}:"
      }
    ],
    ruby: [
        {
        title: "To flag a person’s data as incorrect",
        example: "person = Clearbit::Enrichment::Person.find(email: 'alex@alexmaccaw.com') <br> \
        person.flag!(given_name: 'Alexander', employment_title: 'The Great')"
        }
      ],
    node: [
        {
            title: "Or to look up a company:",
            example: "var clearbit = require('clearbit')('{key}'); <br> \
            <br> \
            clearbit.Person.find({email: 'alex@alexmaccaw.com'}) <br> \
              .then(function (person) { <br> \
                person.flag({ <br> \
                  givenName: 'Alexander', <br> \
                  employmentTitle: 'The Great' <br> \
                });<br> \
              })"
          }
      ],
    python: [
        {
            title: "To flag a person’s data as incorrect",
            example: "person = clearbit.Person.find(email='alex@alexmaccaw.com') <br> \
            person.flag(given_name='Alexander', employment_title='The Great')"
          }
      ]
  }
  export const flaging=[
    {param:"given_name", description:"<span style='font-size:16px; font-weight:600'>string</span><br><p> (optional) First name of person"},
    {param:"family_name", description:"<span style='font-size:16px; font-weight:600'>string</span><br><p> (optional) Last name of person"},
    {param:"employment_title", description:"<span style='font-size:16px; font-weight:600'>string</span><br><p> (optional) Company title"},
    {param:"facebook_handle", description:"<span style='font-size:16px; font-weight:600'>string</span><br><p> (optional) Facebook ID or screen name"},
    {param:"github_handle", description:"<span style='font-size:16px; font-weight:600'>string</span><br><p> (optional) GitHub handle"},
    {param:"twitter_handle", description:"<span style='font-size:16px; font-weight:600'>string</span><br><p> (optional) Twitter screen name"},
    {param:"linkedin_handle", description:"<span style='font-size:16px; font-weight:600'>string</span><br><p> (optional) LinkedIn url (i.e. /pub/alex-maccaw/78/929/ab5)"},
    {param:"googleplus_handle", description:"<span style='font-size:16px; font-weight:600'>string</span><br><p> (optional) Google Plus handle."}
  ]
  export const responseType=[
        {code:"200", description:"Successful received, we will look into the issue."},
        {code :"404",description:"Person not found."}
    ]
    export const domainLookup=[
        {param:"domain", description:"<span style='font-size:16px; font-weight:600'>string</span><br><p> (required) The domain to look up.</p>"},
        {param:"webhook_url", description:"<span style='font-size:16px; font-weight:600'>string</span><br><p> A webhook URL that results will be sent to.</p>"},
        {param:"company_name", description:"<span style='font-size:16px; font-weight:600'>string</span><br><p> The name of the company.</p>"},
        {param:"linkedin", description:"<span style='font-size:16px; font-weight:600'>string</span><br><p> The LinkedIn URL for the company.</p>"},
        {param:"twitter", description:"<span style='font-size:16px; font-weight:600'>string</span><br><p> The Twitter handle for the company.</p>"},
        {param:"facebook", description:"<span style='font-size:16px; font-weight:600'>string</span><br><p> The Facebook URL for the company.</p>"}
    ]
    export const domainLookupExample={
        shell: [
          {
            title: "To look up a company by domain name, run the following. The command will either return a 404 (in which case the company wasn’t found), a 422 if the domain name is invalid (doesn’t exist, or doesn’t resolve), a 202 indicating the lookup has been queued, or a 200 returning the relevant company.",
            example: "curl 'https://company.clearbit.com/v2/companies/find?domain=segment.com' <br> \
            -u {key}:"
          }
        ],
        ruby: [
            {
                title: "To look up a company by name name, run the following. The call will either return nil (in which case a company wasn’t found), a blank object that responds to ‘pending?’ in which case the lookup is queued, or the relevant company object.",
                example: "company = Clearbit::Enrichment::Company.find(domain: 'segment.com', company_name: 'Segment, Inc.') <br> \
                <br> \
                if company && !company.pending? <br> \
                  puts 'Name: #{company.name}' <br> \
                end"
            }
          ],
        node: [
            {
              title: "To lookup a company by domain name, run the following.",
              example: "var clearbit = require('clearbit')('{key}');<br> \
              var Company = clearbit.Company; <br> \
              <br> \
              Company.find({domain: 'uber.com'}) <br> \
                .then(function (company) { <br> \
                  console.log('Name: ', company.name); <br> \
                }) <br> \
                .catch(Company.QueuedError, function (err) { <br> \
                  // Company lookup queued - try again later <br> \
                }) <br> \
                .catch(Company.NotFoundError, function (err) { <br> \
                  // Company could not be found <br> \
                  console.log(err); <br> \
                }) <br> \
                .catch(function (err) { <br> \
                  console.error(err); <br> \
                });"
            }
          ],
        python: [
            {
              title: "To lookup a company by domain name, run the following.",
              example: "company = clearbit.Company.find(domain='segment.com') <br> \
              if company != None and 'pending' not in company: <br> \
                print 'Name: ' + company['name']" 
            }
          ]
      }
    export const domainHttpGetParams=[
        {param:"webhook_id",description:"<span style='font-size:16px; font-weight:600'>string</span><br><p>Custom identifier for the webhook request.</p>"}
    ]
    export const domainResponseType=[        
        {code:"200", description:"Successful lookup, company encoded in the response body."},
        {code:"202", description:"Asynchronously looking up the company."},
        {code:"404", description:"Company not found."},
        {code:"422", description:"Domain name is invalid."}
    ]
    export const flagingTwo=[
        {param:"name", description:"<span style='font-size:16px; font-weight:600'>string</span><br><p> (optional) Name of company</p>"},
        {param:"tags", description:"<span style='font-size:16px; font-weight:600'>array</span><br><p> List of market categories the company is involved in</p>"},
        {param:"description", description:"<span style='font-size:16px; font-weight:600'>string</span><br><p> Description of the company</p>"},
        {param:"raised", description:"<span style='font-size:16px; font-weight:600'>integer</span><br><p> Total amount raised</p>"},
        {param:"location", description:"<span style='font-size:16px; font-weight:600'>string</span><br><p> Address of company</p>"},
        {param:"facebook_handle", description:"<span style='font-size:16px; font-weight:600'>string</span><br><p> (optional) Facebook ID or screen name</p>"},
        {param:"twitter_handle", description:"<span style='font-size:16px; font-weight:600'>string</span><br><p> (optional) Twitter screen name</p>"},
        {param:"linkedin_handle", description:"<span style='font-size:16px; font-weight:600'>string</span><br><p> (optional) LinkedIn URL (i.e. /pub/alex-maccaw/78/929/ab5)</p>"},
        {param:"crunchbase_handle", description:"<span style='font-size:16px; font-weight:600'>string</span><br><p> Crunchbase handle</p>"},
        {param:"employees", description:"<span style='font-size:16px; font-weight:600'>integer</span><br><p> Amount of employees</p>"},
        {param:"logo", description:"<span style='font-size:16px; font-weight:600'>string</span><br><p> SRC of company logo</p>"},
        {param:"email_provider",description:"<span style='font-size:16px; font-weight:600'>boolean</span><br><p> is the domain associated with a free email provider (i.e. Gmail)?</p>"},
        {param:"type", description:"<span style='font-size:16px; font-weight:600'>string</span><br><p> Type of company (education, government, nonprofit, private, public, personal)</p>"}
    ]
    export const flagingTwoExample={
        shell: [
          {
            title: "To flag a company’s data as incorrect",
            example: "curl 'https://company.clearbit.com/v2/companies/flag' <br> \
            -XPOST <br> \
            -d 'domain=segment.com' <br> \
            -d 'name=Segment' <br> \
            -u {key}:"
          }
        ],
        ruby: [
            {
              title: "To flag a company’s data as incorrect",
              example: "company = Clearbit::Enrichment::Company.find(domain: 'segment.com') <br> \
              company.flag!(name: 'Segment')"
            }
          ],
        node: [
            {
              title: "To flag a company’s data as incorrect",
              example: "var clearbit = require('clearbit')('{key}'); <br> \
              <br> \
              clearbit.Company.find({domain: 'segment.com'})  <br> \
                .then(function (company) {  <br> \
                  company.flag({ <br> \
                    name: 'Segment' <br> \
                  }); <br> \
                })"
            }
          ],
        python: [
            {
              title: "To flag a company’s data as incorrect",
              example: "company = clearbit.Company.find(domain='segment.com')  <br> \
              company.flag(name='Segment')"
            }
          ]
      }