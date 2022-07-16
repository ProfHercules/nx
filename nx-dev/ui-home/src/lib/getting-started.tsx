import { ChevronRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export function GettingStarted(): JSX.Element {
  return (
    <article
      id="getting-started"
      className="bg-gradient-to-r from-cyan-500 to-blue-500"
    >
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-24 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            <span className="block">Ready to dive in?</span>
            <span className="block text-white">
              Start your monorepo now with Nx.
            </span>
          </h2>
          <div className="mt-8 flex">
            <div className="inline-flex rounded-md">
              <Link href="/getting-started/intro">
                <a
                  title="Start using Nx by creating a workspace"
                  className="w-full flex-none rounded-full border border-transparent bg-slate-100 py-3 px-6 text-lg font-semibold leading-6 transition hover:bg-slate-200 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700 sm:w-auto"
                >
                  Get started
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
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
    </article>
  );
}
