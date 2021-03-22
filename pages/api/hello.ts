import { NextApiRequest, NextApiResponse } from 'next'

const getHtml = ({ title }) => `
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          width: 100%;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          font: normal normal 100%/1.5 sans-serif;
          background: #666;
        }

        h1 {
          font-size: 7vw;
          color: #eee;
        }
      </style>
    </head>
    <body>
      <h1>${title}</h1>
    </body>
  </html>
`

export default (req: NextApiRequest, res: NextApiResponse) => {
  const isDebugMode = true
  const html = getHtml({ title: req.query.title })

  if (isDebugMode) {
    res.setHeader('Content-Type', 'text/html')
    return res.end(html)
  }
}
