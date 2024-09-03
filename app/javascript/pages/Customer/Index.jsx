import { Link, Head } from '@inertiajs/react'
import { Fragment } from 'react'
import Customer from './Customer'

export default function Index({ customers, flash }) {
  return (
    <>
      <Head title="Customers" />
      <div className="mx-auto md:w-2/3 w-full px-8 pt-8">
        {flash.notice && (
          <p className="py-2 px-3 bg-green-50 mb-5 text-green-500 font-medium rounded-lg inline-block">
            {flash.notice}
          </p>
        )}
        <div className="flex justify-between items-center">
          {console.log(customers)}
          <h1 className="font-bold text-4xl">Customers</h1>
          <Link
            href="/customers/new"
            className="rounded-lg py-3 px-5 bg-blue-600 text-white block font-medium"
          >
            New customer
          </Link>
        </div>

        <div className="min-w-full">
          {customers.map((customer) => (
            <Fragment key={customer.id}>
              <Customer customer={customer} />
              <p>
                <Link
                  href={`/customers/${customer.id}`}
                  className="ml-2 rounded-lg py-3 px-5 bg-gray-100 inline-block font-medium"
                >
                  Show this customer
                </Link>
              </p>
            </Fragment>
          ))}
        </div>
      </div>
    </>
  )
}
