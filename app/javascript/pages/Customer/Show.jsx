import { Link, Head } from '@inertiajs/react'
import Customer from './Customer'

export default function Show({ customer, flash }) {
  const onDestroy = (e) => {
    if (!confirm('Are you sure you want to delete this customer?')) {
      e.preventDefault()
    }
  }

  return (
    <>
      <Head title={`Customer #${customer.id}`} />

      <div className="mx-auto md:w-2/3 w-full px-8 pt-8">
        <div className="mx-auto">
          {flash.notice && (
            <p className="py-2 px-3 bg-green-50 mb-5 text-green-500 font-medium rounded-lg inline-block">
              {flash.notice}
            </p>
          )}

          <h1 className="font-bold text-4xl">Customer #{customer.id}</h1>

          <Customer customer={customer} />

          <Link
            href={`/customers/${customer.id}/edit`}
            className="mt-2 rounded-lg py-3 px-5 bg-gray-100 inline-block font-medium"
          >
            Edit this customer
          </Link>
          <Link
            href="/customers"
            className="ml-2 rounded-lg py-3 px-5 bg-gray-100 inline-block font-medium"
          >
            Back to customers
          </Link>
          <div className="inline-block ml-2">
            <Link
              href={`/customers/${customer.id}`}
              onClick={onDestroy}
              as="button"
              method="delete"
              className="mt-2 rounded-lg py-3 px-5 bg-gray-100 font-medium"
            >
              Destroy this customer
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
