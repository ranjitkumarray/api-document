export const webhooksResponsePostBodyExample = {
    shell: [
      {
        title: "The incoming webhook POST request’s body is formatted as JSON, and looks like this:",
        example: {
            "id": "custom_id",
            "status": 200,
            "body": {
              "name": {
                "givenName": "Alex",
                "familyName": "MacCaw",
                "fullName": "Alex MacCaw"
              },
              "//": "..."
            }
          }
      }
    ],
    ruby: [
        {
          title: "The incoming webhook POST request’s body is formatted as JSON, and looks like this:",
          example: {
              "id": "custom_id",
              "status": 200,
              "body": {
                "name": {
                  "givenName": "Alex",
                  "familyName": "MacCaw",
                  "fullName": "Alex MacCaw"
                },
                "//": "..."
              }
            }
        },
        {
            title:"Here’s how you’d process a webhook request in Rails.",
            example:"# webhook_controller.rb <br> \
    class WebhookController < ApplicationController <br> \
    def clearbit <br> \
        webhook = Clearbit::Webhook.new(env)  <br> \
        <br> \
        case webhook.type  <br> \
        when 'person'  <br> \
        person = Person.find(webhook.id)  <br> \
        person.clearbit = webhook.body  <br> \
        person.unknown  = webhook.status == 404  <br> \
        person.save  <br> \
        end  <br> \
        <br> \
        head 200  <br> \
    end  <br> \
    end  <br> \
    <br> \
    # routes.rb  <br> \
    post 'webhook/clearbit' => 'webhook#clearbit'"
        }
      ],
    node: [
        {
          title: "The incoming webhook POST request’s body is formatted as JSON, and looks like this:",
          example: {
              "id": "custom_id",
              "status": 200,
              "body": {
                "name": {
                  "givenName": "Alex",
                  "familyName": "MacCaw",
                  "fullName": "Alex MacCaw"
                },
                "//": "..."
              }
            }
        }
      ],
    python: [
        {
          title: "The incoming webhook POST request’s body is formatted as JSON, and looks like this:",
          example: {
              "id": "custom_id",
              "status": 200,
              "body": {
                "name": {
                  "givenName": "Alex",
                  "familyName": "MacCaw",
                  "fullName": "Alex MacCaw"
                },
                "//": "..."
              }
            }
        }
      ]
  }
  export const webhooksResponsePostBody=[
    { attribute:"id",description:"<span style='font-size:16px; font-weight:600'>String</span><br>Custom user-supplied webhook identifier."} ,
    { attribute:"type",description:"<span style='font-size:16px; font-weight:600'>String</span><br>Either person, company, person_company, or candidate_match."} ,
    { attribute:"status",description:"<span style='font-size:16px; font-weight:600'>Integer</span><br>Either a 200 status code (record was found), or a 404 status code (record was not found)."},
    { attribute:"body",description:"<span style='font-size:16px; font-weight:600'>Hash</span> <br> Result object, either null or the encoded person."}
  ]
  export const securingWebhooks=[
      {header:"X-Request-Signature",name:"A SHA1 HMAC hexdigest computed with your API key and the raw body of the request. Make sure to strip the prefix (sk_, pk_) from the start of the key before generating the HMAC."}
  ]