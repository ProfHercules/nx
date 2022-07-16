import { ChevronRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export function Migrate(): JSX.Element {
  return (
    <article
      id="getting-started"
      className="bg-gradient-to-r from-pink-500 to-purple-700"
    >
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-24 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            <span className="block">Already have a monorepo?</span>
            <span className="block text-white">
              Migrate to Nx in one command.
            </span>
          </h2>
          <div className="mt-8 flex">
            <div className="inline-flex rounded-md">
              <Link href="/recipe/adding-to-monorepo">
                <a
                  title="Start using Nx by creating a workspace"
                  className="w-full flex-none rounded-full border border-transparent bg-slate-100 py-3 px-6 text-lg font-semibold leading-6 transition hover:bg-slate-200 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700 sm:w-auto"
                >
                  Start your migration
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <button
            title="Add Nx to monorepo"
            className="flex w-full items-center rounded-lg border border-slate-200 bg-white py-3 px-6 text-lg font-semibold leading-6 transition hover:bg-slate-100 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700 sm:w-auto"
          >
            <ChevronRightIcon
              aria-hidden="true"
              className="font-input-mono mr-2 h-5 w-5 text-blue-500 dark:text-sky-500"
            />
            npx add-nx-to-monorepo
          </button>
        </div>
      </div>
    </article>
  );
}
