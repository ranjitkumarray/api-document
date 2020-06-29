export interface PeriodicElement {
  title: string;
  code: string;
  description: string;
}
export interface errorType {
  type: string;
  description: string;
}
export interface reatingLimits {
  header: string;
  name: string;
}
export const HttpStatusCode: PeriodicElement[] = [
  { code: '200', title: 'OK', description: 'The request was successful.' },
  { code: '201', title: 'Created', description: 'The resource was successfully created.' },
  { code: '202', title: 'Async created', description: 'The resource was asynchronously created.' },
  { code: '400', title: 'Bad request', description: 'Bad request' },
  { code: '401', title: 'Unauthorized', description: 'Your API key is invalid.' },
  { code: '402', title: 'Over quota', description: 'Over plan quota on this endpoint.' },
  { code: '404', title: 'Not found', description: 'The resource does not exist.' },
  { code: '422', title: 'Validation error', description: 'A validation error occurred.' },
  { code: '429', title: 'Too Many Requests', description: 'The rate limit was exceeded.' },
  { code: '50X', title: 'Internal Server Error', description: 'An error occurred with our API.' }
];


export const HttpErrorType: errorType[] = [
  { type: 'params_invalid', description: 'Your parameters were not valid.' },
  { type: 'unknown_record', description: 'Record was not found.' },
  { type: 'unknown_route', description: 'URL was not valid.' },
  { type: 'queued', description: 'Lookup queued. Try this request again in a few minutes.' },
  { type: 'rate_limit', description: 'The request has been rate limited.' },
  { type: 'api_error', description: 'Internal API error.' }
];
export const httpErrorExample = {
  shell: [
    {
      title: "Example error response.",
      example: {
        "error": {
          "type": "params_invalid",
          "message": "Name is required"
        }
      }
    }
  ],
  ruby: [
    {
      title: "Example error response.",
      example: {
        "error": {
          "type": "params_invalid",
          "message": "Name is required"
        }
      }
    }],
  node: [
    {
      title: "Example error response.",
      example: {
        "error": {
          "type": "params_invalid",
          "message": "Name is required"
        }
      }
    }],
  python: [
    {
      title: "Example error response.",
      example: {
        "error": {
          "type": "params_invalid",
          "message": "Name is required"
        }
      }
    }]
}
export const authenticationExample = {
  shell: [
    {
      title: "Authentication using HTTP basic auth.",
      example: "curl 'https://person.clearbit.com/v1/people/email/alex@alexmaccaw.com'  \ <br> -u {key}:"
    },
    {
      title: "Alternatively pass a Bearer token in an Authorization header.",
      example: "curl 'https://person.clearbit.com/v1/people/email/alex@alexmaccaw.com'  \ <br> -H 'Authorization: Bearer {key}'"
    }
  ],
  ruby: [
    {
      title: "",
      example: "require 'clearbit' <br>Clearbit.key = '{key}'"
    }
  ],
  node: [
    {
      title: "",
      example: "var clearbit = require('clearbit')('{key}');"
    }
  ],
  python: [
    {
      title: "",
      example: "import clearbit <br>clearbit.key = '{key}'"
    }
  ],
}
export const reatingLimit:reatingLimits[]=[
  { header:"X-RateLimit-Limit",name:"The maximum number of requests that the consumer is permitted to make per minute." },
  { header:"X-RateLimit-Remaining",name:"The number of requests remaining in the current rate limit window." },
  { header:"X-RateLimit-Reset",name:"The time at which the current rate limit window resets in UTC epoch seconds." },
  { header:"Retry-After	",name:"The number of seconds to wait until the rate limit window resets. Only sent when the rate limit is reached." }
]
export const reatingLimitExample={
  shell: [
    {
      title: "Check to see how many requests we have left:",
      example: "$ curl -i https://person.clearbit.com <br> HTTP/1.1 200 OK <br>Date: Mon, 01 Jul 2014 21:20:00 GMT<br>Status: 200 OK<br>X-RateLimit-Limit: 5000<br>X-RateLimit-Remaining: 4050<br>X-RateLimit-Reset: 3300'  \ <br> -u {key}:"
    },
    {
      title: "Example rate limit error response.",
      example: "HTTP/1.1 429 Too Many Requests<br>X-RateLimit-Limit: 500<br>X-RateLimit-Remaining: 0<br>X-RateLimit-Reset: 1402010983<br>Retry-After: 50'  \ <br> -H 'Authorization: Bearer {key}'"
    },
    {
      title: "application/json",
      example: 
      {
        "error": {
          "type": "rate_limit",
          "message": "Rate limit exceeded. Limit is 600 requests per minute. Rate limit will be reset in 50 seconds."
        }
      }
    }
  ],
  ruby: [
    {
      title: "Check to see how many requests we have left:",
      example: "$ curl -i https://person.clearbit.com <br> HTTP/1.1 200 OK <br>Date: Mon, 01 Jul 2014 21:20:00 GMT<br>Status: 200 OK<br>X-RateLimit-Limit: 5000<br>X-RateLimit-Remaining: 4050<br>X-RateLimit-Reset: 3300'  \ <br> -u {key}:"
    },
    {
      title: "Example rate limit error response.",
      example: "HTTP/1.1 429 Too Many Requests<br>X-RateLimit-Limit: 500<br>X-RateLimit-Remaining: 0<br>X-RateLimit-Reset: 1402010983<br>Retry-After: 50'  \ <br> -H 'Authorization: Bearer {key}'"
    },
    {
      title: "application/json",
      example: 
      {
        "error": {
          "type": "rate_limit",
          "message": "Rate limit exceeded. Limit is 600 requests per minute. Rate limit will be reset in 50 seconds."
        }
      }
    }
  ],
  node: [
    {
      title: "Check to see how many requests we have left:",
      example: "$ curl -i https://person.clearbit.com <br> HTTP/1.1 200 OK <br>Date: Mon, 01 Jul 2014 21:20:00 GMT<br>Status: 200 OK<br>X-RateLimit-Limit: 5000<br>X-RateLimit-Remaining: 4050<br>X-RateLimit-Reset: 3300'  \ <br> -u {key}:"
    },
    {
      title: "Example rate limit error response.",
      example: "HTTP/1.1 429 Too Many Requests<br>X-RateLimit-Limit: 500<br>X-RateLimit-Remaining: 0<br>X-RateLimit-Reset: 1402010983<br>Retry-After: 50'  \ <br> -H 'Authorization: Bearer {key}'"
    },
    {
      title: "application/json",
      example: 
      {
        "error": {
          "type": "rate_limit",
          "message": "Rate limit exceeded. Limit is 600 requests per minute. Rate limit will be reset in 50 seconds."
        }
      }
    }
  ],
  python: [
    {
      title: "Check to see how many requests we have left:",
      example: "$ curl -i https://person.clearbit.com <br> HTTP/1.1 200 OK <br>Date: Mon, 01 Jul 2014 21:20:00 GMT<br>Status: 200 OK<br>X-RateLimit-Limit: 5000<br>X-RateLimit-Remaining: 4050<br>X-RateLimit-Reset: 3300'  \ <br> -u {key}:"
    },
    {
      title: "Example rate limit error response.",
      example: "HTTP/1.1 429 Too Many Requests<br>X-RateLimit-Limit: 500<br>X-RateLimit-Remaining: 0<br>X-RateLimit-Reset: 1402010983<br>Retry-After: 50'  \ <br> -H 'Authorization: Bearer {key}'"
    },
    {
      title: "application/json",
      example: 
      {
        "error": {
          "type": "rate_limit",
          "message": "Rate limit exceeded. Limit is 600 requests per minute. Rate limit will be reset in 50 seconds."
        }
      }
    }
  ],
}

export const versioningExample = {
  shell: [
    {
      title: "You can pass a specific API version like so:",
      example: "curl 'https://person.clearbit.com/v1/people/email/alex@clearbit.com' \ <br>-H 'API-Version: 2019-12-19' \ <br>-u {key}:"
    }
  ],
  ruby: [
    {
      title: "You can pass a specific API version like so:",
      example: "Clearbit::Person.version = '2019-12-19'"
    }
  ],
  node: [
    {
      title: "You can pass a specific API version like so:",
      example: "var clearbit = require('clearbit')('{key}');<br>clearbit.Person.setVersion('2019-12-19');"
    }
  ],
  python: [
    {
      title: "You can pass a specific API version like so:",
      example: "import clearbit<br>clearbit.Person.version = '2019-12-19'"
    }
  ],
}
export const versioning=[
  { api:"Person API	",current_version:"2019-12-19" },
  { api:"Company API",current_version:"2019-12-19" },
  { api:"Reveal API",current_version:"2019-12-19" },
  { api:"Watchlist API	",current_version:"2015-11-13" }
]