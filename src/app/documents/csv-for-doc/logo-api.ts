export const httpRequestExample={
    shell: [
      {
        title: "You can call the API directly from an html img tag - images are returned inline. For example:",
        example: '<img src="https://logo.clearbit.com/segment.com">'
      },
      {
        title: "To alter the size or greyscale, pass some query params:",
        example: '<img src="https://logo.clearbit.com/segment.com?size=200&greyscale=true">'
      }
    ],
    ruby: [
        {
          title: "You can call the API directly from an html img tag - images are returned inline. For example:",
          example: '<img src="https://logo.clearbit.com/segment.com">'
        },
        {
          title: "To alter the size or greyscale, pass some query params:",
          example: '<img src="https://logo.clearbit.com/segment.com?size=200&greyscale=true">'
        }
      ],
    node: [
        {
          title: "You can call the API directly from an html img tag - images are returned inline. For example:",
          example: '<img src="https://logo.clearbit.com/segment.com">'
        },
        {
          title: "To alter the size or greyscale, pass some query params:",
          example: '<img src="https://logo.clearbit.com/segment.com?size=200&greyscale=true">'
        }
      ],
    python: [
        {
          title: "You can call the API directly from an html img tag - images are returned inline. For example:",
          example: '<img src="https://logo.clearbit.com/segment.com">'
        },
        {
          title: "To alter the size or greyscale, pass some query params:",
          example: '<img src="https://logo.clearbit.com/segment.com?size=200&greyscale=true">'
        }
      ]
  }

  export const logoHttpGetParam=[
    {param:"size",description:'<span style="font-size:16px; font-weight:600">integer</span><p> (optional) image size: length of longest side in pixels (default is 128)</p>'},
    {param:"format",description:'<span style="font-size:16px; font-weight:600">string</span><p> (optional) image format, either "png" or "jpg" (defaults to png)</p>'},
    {param:"greyscale",description:'<span style="font-size:16px; font-weight:600">boolean</span><p> (optional) Desaturates image if passed (defaults to false)</p>'}
  ]

  export const yourOwnLogoExample={
    shell: [
      {
        title: "Specify your own logo with the og:logo Open Graph tag.",
        example: '<meta property="og:logo" content="http://yourdomain.com/logo.png" />'
      },
      {
        title: "Or to specify different sizes add multiple meta tags with a size attribute.",
        example: '<meta property="og:logo" content="/logo.png" size="150x150" /> \
                <meta property="og:logo" content="/logo.png" size="250x250" /> \
                <meta property="og:logo" content="/logo.png" size="500x500" />' 
      }
    ],
    ruby: [
        {
          title: "Specify your own logo with the og:logo Open Graph tag.",
          example: '<meta property="og:logo" content="http://yourdomain.com/logo.png" />'
        },
        {
          title: "Or to specify different sizes add multiple meta tags with a size attribute.",
          example: '<meta property="og:logo" content="/logo.png" size="150x150" /> \
        <meta property="og:logo" content="/logo.png" size="250x250" /> \
        <meta property="og:logo" content="/logo.png" size="500x500" />'
        }
      ],
    node: [
        {
          title: "Specify your own logo with the og:logo Open Graph tag.",
          example: '<meta property="og:logo" content="http://yourdomain.com/logo.png" />'
        },
        {
          title: "Or to specify different sizes add multiple meta tags with a size attribute.",
          example: '<meta property="og:logo" content="/logo.png" size="150x150" /> \
                    <meta property="og:logo" content="/logo.png" size="250x250" /> \
                    <meta property="og:logo" content="/logo.png" size="500x500" />'
        }
      ],
    python: [
        {
          title: "Specify your own logo with the og:logo Open Graph tag.",
          example: '<meta property="og:logo" content="http://yourdomain.com/logo.png" />'
        },
        {
          title: "Or to specify different sizes add multiple meta tags with a size attribute.",
          example: '<meta property="og:logo" content="/logo.png" size="150x150" /> \
<meta property="og:logo" content="/logo.png" size="250x250" /> \
<meta property="og:logo" content="/logo.png" size="500x500" />'
        }
      ]
  }