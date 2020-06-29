export const streamingExample={
    shell: [
      {
        title: "To look up a person:",
        example: "curl 'https://person-stream.clearbit.com/v1/people/email/alex@alexmaccaw.com' <br> \
        -u {key}:"
      },
      {
        title: "Or to look up a company:",
        example: "curl 'https://company-stream.clearbit.com/v1/companies/domain/segment.com' <br> \
        -u {key}:"
      }
    ],
    ruby: [
        {
          title: "To look up a person:",
          example: 'result = Clearbit::Enrichment.find(email: "alex@alexmaccaw.com", stream: true) <br> \
          <br> \
          if person = result.person  <br> \
            puts "Name: #{person.name.full_name}" <br>\
          end'
        },
        {
        title: "Or to look up a company:",
        example: 'company = Clearbit::Company.find(domain: "segment.com", stream: true) <br> \
        <br> \
        if company <br> \
          puts "Name: #{company.name}" <br> \
        end'
        }
      ],
    node: [
        {
          title: "To look up a person:",
          example: "var clearbit = require('clearbit')('{key}'); <br> \
          <br> \
          clearbit.Person.find({email: 'alex@clearbit.com', stream: true}) <br> \
            .then(function (person) { <br> \
              console.log('Name: ', person.name.fullName); <br> \
            });"
        },
        {
            title: "Or to look up a company:",
            example: "var clearbit = require('clearbit')('{key}'); <br> \
            <br> \
            clearbit.Company.find({domain: 'segment.com', stream: true}) <br> \
              .then(function (company) { <br> \
                console.log('Name: ', company.name); <br> \
              });"
          }
      ],
    python: [
        {
          title: "To look up a person:",
          example: "person = clearbit.Person.find(email='alex@alexmaccaw.com', stream=True) <br> \
          if person != None: <br> \
            print 'Name: ' + person['name']['fullName']"
        },
        {
            title: "Or to look up a company:",
            example: "company = clearbit.Company.find(domain='segment.com', stream=True) <br> \
            if company != None: <br> \
              print 'Name: ' + company['name']"
          }
      ]
  }