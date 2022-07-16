export function Newsletter(): JSX.Element {
  return (
    <div className="bg-gray-50 pt-28 dark:bg-slate-800/40">
      <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:flex lg:items-center lg:py-24 lg:px-8">
        <div className="lg:w-0 lg:flex-1">
          <h1 className="text-lg font-semibold tracking-tight text-blue-500 dark:text-sky-500">
            Stay up to date
          </h1>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 sm:text-5xl">
            Nx is growing fast, stay in the loop!
          </h2>
          <p className="mt-4 text-lg text-slate-700 dark:text-slate-400">
            Join the Nx newsletter and stay updated on new releases and
            features, guides and recipes, events and fresh video tutorials.
          </p>
        </div>
        <div className="mt-8 lg:mt-0 lg:ml-8">
          <form className="sm:flex">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email-address"
              type="email"
              autoComplete="email"
              required
              className="w-full rounded-md border-0 bg-white py-1.5 px-2 text-sm leading-4 ring-1 ring-slate-300 transition dark:bg-slate-700 dark:ring-slate-900"
              placeholder="Enter your email"
            />
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
              <button
                type="submit"
                className="flex w-full rounded-lg bg-blue-500 py-3 px-6 text-lg text-white dark:bg-sky-500"
              >
                Notify me
              </button>
            </div>
          </form>
          <p className="mt-3 text-sm text-slate-500 dark:text-slate-500">
            We care about the protection of your data. Read our{' '}
            <a
              href="https://nrwl.io/pages/privacy-policy"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline"
            >
              Privacy Policy.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
