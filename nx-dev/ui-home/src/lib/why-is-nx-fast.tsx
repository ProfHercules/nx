import {
  AcademicCapIcon,
  BeakerIcon,
  ChartBarIcon,
  CloudArrowDownIcon,
  CubeTransparentIcon,
  ServerStackIcon,
} from '@heroicons/react/24/outline';
import { CogIcon } from '@heroicons/react/24/solid';

export function WhyIsNxFast(): JSX.Element {
  return (
    <article
      id="why-is-nx-fast"
      className="relative bg-gray-50 pt-28 dark:bg-slate-800/40"
    >
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <header className="max-w-prose">
          <h1 className="text-lg font-semibold tracking-tight text-blue-500 dark:text-sky-500">
            Full monorepo support
          </h1>
          <p className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 sm:text-5xl">
            How Nx makes your workspace performant
          </p>
        </header>
        <dl className="mt-16 grid grid-cols-1 gap-16 sm:grid-cols-2 lg:grid-cols-4">
          <div key="Never rebuild the same code twice" className="group">
            <dt>
              <div className="relative flex h-12 w-12">
                <CogIcon
                  className="h-8 w-8 text-blue-500 dark:text-sky-500"
                  aria-hidden="true"
                />
                <CloudArrowDownIcon
                  className="absolute -top-2 -right-4 h-8 w-8 text-purple-500 opacity-0 transition-opacity group-hover:opacity-100 dark:text-fuchsia-500"
                  aria-hidden="true"
                />
                <CogIcon
                  className="absolute bottom-0 right-0 h-8 w-8 text-purple-500 opacity-0 transition-opacity group-hover:opacity-100 group-hover:motion-safe:animate-spin dark:text-fuchsia-500"
                  aria-hidden="true"
                />
              </div>
              <p className="relative mt-4 text-base font-medium leading-6 text-gray-900 dark:text-slate-100">
                <span className="absolute -left-4 h-full w-0.5 bg-blue-500 dark:bg-sky-500"></span>
                Never rebuild the same code twice
              </p>
            </dt>
            <dd className="mt-2 text-base text-slate-500 dark:text-slate-400">
              Nx won't run the tasks it executed before, and instead will
              restore the files and the terminal output from its cache.
            </dd>
          </div>
          <div key="Distributed task execution" className="group">
            <dt>
              <div className="relative flex h-12 w-12">
                <ServerStackIcon
                  className="h-8 w-8 text-blue-500 dark:text-sky-500"
                  aria-hidden="true"
                />
                <CogIcon
                  className="absolute bottom-0 right-0 h-8 w-8 text-purple-500 opacity-0 transition-opacity group-hover:opacity-100 group-hover:motion-safe:animate-spin dark:text-fuchsia-500"
                  aria-hidden="true"
                />
              </div>
              <p className="relative mt-4 text-base font-medium leading-6 text-gray-900 dark:text-slate-100">
                <span className="absolute -left-4 h-full w-0.5 bg-blue-500 dark:bg-sky-500"></span>
                Distributed task execution (DTE)
              </p>
            </dt>
            <dd className="mt-2 text-base text-slate-500 dark:text-slate-400">
              Nx can run any command across multiple machines without having to
              configure anything. Everything is taken cared of.
            </dd>
          </div>
          <div key="Computation caching" className="group">
            <dt>
              <div className="relative flex h-12 w-12">
                <CloudArrowDownIcon
                  className="h-8 w-8 text-blue-500 dark:text-sky-500"
                  aria-hidden="true"
                />
                <CubeTransparentIcon
                  className="absolute inset-0 h-8 w-8 text-purple-500 opacity-0 transition-all group-hover:translate-x-8 group-hover:-translate-y-1 group-hover:opacity-100 dark:text-fuchsia-500"
                  aria-hidden="true"
                />
                <CubeTransparentIcon
                  className="5 absolute inset-0 h-8 w-8 text-purple-500 opacity-0 transition-all group-hover:translate-x-5 group-hover:translate-y-6 group-hover:opacity-100 dark:text-fuchsia-500"
                  aria-hidden="true"
                />
              </div>
              <p className="relative mt-4 text-base font-medium leading-6 text-gray-900 dark:text-slate-100">
                <span className="absolute -left-4 h-full w-0.5 bg-blue-500 dark:bg-sky-500"></span>
                Computation caching
              </p>
            </dt>
            <dd className="mt-2 text-base text-gray-500 dark:text-slate-400">
              Remote and local computation caching makes greatly improve your
              developer experience and CI.
            </dd>
          </div>
          <div key="Efficient execution" className="group">
            <dt>
              <div className="relative flex h-12 w-12">
                <AcademicCapIcon
                  className="h-8 w-8 text-blue-500 dark:text-sky-500"
                  aria-hidden="true"
                />
                <BeakerIcon
                  className="absolute inset-0 h-8 w-8 text-purple-500 opacity-0 transition-all group-hover:translate-x-8 group-hover:-translate-y-1 group-hover:opacity-100 dark:text-fuchsia-500"
                  aria-hidden="true"
                />
                <ChartBarIcon
                  className="5 absolute inset-0 h-8 w-8 text-purple-500 opacity-0 transition-all group-hover:translate-x-5 group-hover:translate-y-6 group-hover:opacity-100 dark:text-fuchsia-500"
                  aria-hidden="true"
                />
              </div>
              <p className="relative mt-4 text-base font-medium leading-6 text-gray-900 dark:text-slate-100">
                <span className="absolute -left-4 h-full w-0.5 bg-blue-500 dark:bg-sky-500"></span>
                Efficient execution
              </p>
            </dt>
            <dd className="mt-2 text-base text-gray-500 dark:text-slate-400">
              Nx runs any command in the most efficient way with the max degree
              of parallelization while respecting the execution order.
            </dd>
          </div>
        </dl>
      </div>
    </article>
  );
}
