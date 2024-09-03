import { Link, Head } from '@inertiajs/react'
import Form from './Form'

export default function Edit({ customer }) {
  return (
    <>
      <Head title="Editing customer" />

      <div className="mx-auto md:w-2/3 w-full px-8 pt-8">
        <h1 className="font-bold text-4xl">Editing customer</h1>

        <Form
          customer={customer}
          onSubmit={(form) => {
            form.transform((data) => ({ customer: data }))
            form.patch(`/customers/${customer.id}`)
          }}
          submitText="Update customer"
        />

        <Link
          href={`/customers/${customer.id}`}
          className="ml-2 rounded-lg py-3 px-5 bg-gray-100 inline-block font-medium"
        >
          Show this customer
        </Link>
        <Link
          href="/customers"
          className="ml-2 rounded-lg py-3 px-5 bg-gray-100 inline-block font-medium"
        >
          Back to customers
        </Link>
      </div>
    </>
  )
}
