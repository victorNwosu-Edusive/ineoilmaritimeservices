import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="border-t border-slate-200/70 bg-white py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 text-slate-700 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <p className="text-sm uppercase text-slate-500">INE OIL AND MARITIME SERVICES LIMITED</p>
          <p className="mt-4 max-w-lg text-sm leading-7">
            Precision maritime services across West Africa with a focus on safe vessel operations, operational excellence, and client-first logistics.
          </p>
        </div>
        <div className="space-y-3 text-sm">
          <p className="font-semibold text-slate-900">Contact</p>
          <p>📍 Lagos / Port Harcourt, Nigeria</p>
          <p>✉️ info@ineoilmaritime.com</p>
          <p>📞 +234 800 000 0000</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
