import { useForm } from '@inertiajs/react'

export default function Form({ customer, onSubmit, submitText }) {
  const form = useForm({
    name: customer.name || '',
    balance: customer.balance || '',
    reseller_id: customer.reseller_id || '',
  })
  const { data, setData, errors, processing } = form

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(form)
  }

  return (
    <form onSubmit={handleSubmit} className="contents">
      <div className="my-5">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={data.name}
          className="block shadow rounded-md border border-gray-400 outline-none px-3 py-2 mt-2 w-full"
          onChange={(e) => setData('name', e.target.value)}
        />
        {errors.name && (
          <div className="text-red-500 px-3 py-2 font-medium">
            {errors.name.join(', ')}
          </div>
        )}
      </div>

      <div className="my-5">
        <label htmlFor="balance">Balance</label>
        <input
          type="number"
          name="balance"
          id="balance"
          value={data.balance}
          className="block shadow rounded-md border border-gray-400 outline-none px-3 py-2 mt-2 w-full"
          onChange={(e) => setData('balance', e.target.value)}
        />
        {errors.balance && (
          <div className="text-red-500 px-3 py-2 font-medium">
            {errors.balance.join(', ')}
          </div>
        )}
      </div>

      <div className="my-5">
        <label htmlFor="reseller">Reseller</label>
        <input
          type="text"
          name="reseller"
          id="reseller"
          value={data.reseller_id}
          className="block shadow rounded-md border border-gray-400 outline-none px-3 py-2 mt-2 w-full"
          onChange={(e) => setData('reseller_id', e.target.value)}
        />
        {errors.reseller_id && (
          <div className="text-red-500 px-3 py-2 font-medium">
            {errors.reseller_id.join(', ')}
          </div>
        )}
      </div>

      <div className="inline">
        <button
          type="submit"
          disabled={processing}
          className="rounded-lg py-3 px-5 bg-blue-600 text-white inline-block font-medium cursor-pointer"
        >
          {submitText}
        </button>
      </div>
    </form>
  )
}
