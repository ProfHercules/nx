import { ChevronRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export function Hero(): JSX.Element {
  return (
    <header
      className="bg-contain bg-fixed bg-clip-border bg-center bg-no-repeat bg-origin-border lg:bg-local"
      style={{
        backgroundImage: 'url(/images/background/waves-background2.svg)',
      }}
    >
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="flex flex-col items-center justify-center">
          <div className="flex w-full flex-col">
            <h1
              className="mb-12 text-4xl font-extrabold leading-none tracking-tight text-black drop-shadow dark:text-white sm:mt-6 sm:text-5xl lg:text-7xl lg:font-black lg:leading-tight"
              data-cy="primary-heading"
            >
              <span className="block">
                <span className="rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                  Smart
                </span>
                , Fast
              </span>
              <span className="block">Extensible</span>
              <span className="rounded-lg bg-gradient-to-r from-pink-500 to-purple-700 bg-clip-text text-transparent">
                Build System
              </span>
            </h1>
            <h2 className="mb-16 max-w-2xl py-3 text-2xl font-normal drop-shadow dark:text-slate-100 sm:mb-11">
              Next generation build system with first class monorepo support and
              powerful integrations.
            </h2>
            <div className="flex flex-wrap space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/getting-started/intro">
                <a
                  title="Start using Nx by creating a workspace"
                  className="w-full flex-none rounded-full border border-transparent bg-blue-500 py-3 px-6 text-lg font-semibold leading-6 text-white transition hover:bg-blue-600 hover:text-slate-50 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:bg-sky-500 dark:text-white dark:hover:bg-sky-400 sm:w-auto"
                >
                  Get started
                </a>
              </Link>

              <button
                title="Create an Nx workspace"
                className="flex w-full items-center rounded-lg border border-slate-200 bg-white py-3 px-6 text-lg font-semibold leading-6 transition hover:bg-slate-100 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700 sm:w-auto"
              >
                <ChevronRightIcon
                  aria-hidden="true"
                  className="font-input-mono mr-2 h-5 w-5 text-blue-500 dark:text-sky-500"
                />
                npx create-nx-workspace
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
