export default function Customer({ customer }) {
  return (
    <div>
      <p className="my-5">
        <strong className="block font-medium mb-1">Name:</strong>
        {customer.name?.toString()}
      </p>
      <p className="my-5">
        <strong className="block font-medium mb-1">Balance:</strong>
        {customer.balance?.toString()}
      </p>
      <p className="my-5">
        <strong className="block font-medium mb-1">Reseller:</strong>
        {customer.reseller?.name}
      </p>
    </div>
  )
}
