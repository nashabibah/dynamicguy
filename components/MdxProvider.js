import { MDXProvider } from '@mdx-js/react'
import Highlight, { defaultProps } from 'prism-react-renderer'

const components = {
  h1: (props) => (<h1 {...props}></h1>),
  h2: (props) => (<h2 {...props}></h2>),
  h3: (props) => (<h3 {...props}></h3>),
  h4: (props) => (<h4 {...props}></h4>),
  p: (props) => (<p {...props}></p>),
  a: (props) => (<a {...props}></a>),
  pre: (props) => {
    const className = props.children.props.className || ''
    const matches = className.match(/language-(?<lang>.*)/)
    return (
      <Highlight
        {...defaultProps}
        code={props.children.props.children.trim()}
        language={
          matches && matches.groups && matches.groups.lang
            ? matches.groups.lang
            : ''
        }
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={style}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    )
  }
}

const MdxProvider = ({ children }) => {
  return (
    <MDXProvider components={components}>
      {children}
    </MDXProvider>
  )
}

export default MdxProvider