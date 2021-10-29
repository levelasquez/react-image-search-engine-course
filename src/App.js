import { Formik, Form, Field } from 'formik'

import './header.css'

const App = () => {
  return (
    <div>
      <header>
        <Formik
          initialValues={{ search: '' }}
          onSubmit={async (values) => {
            // call unsplash api
            console.log(values)
          }}
        >
          <Form>
            <Field name="search" />
          </Form>
        </Formik>
      </header>
    </div>
  )
}

export default App
