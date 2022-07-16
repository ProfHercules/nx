import {
  ArrowRightCircleIcon,
  CommandLineIcon,
  CubeIcon,
  CubeTransparentIcon,
} from '@heroicons/react/24/outline';
import { CogIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import Link from 'next/link';

export function AffectedAndCodeGeneration(): JSX.Element {
  return (
    <article
      id="affected-and-code-generation"
      className="relative overflow-hidden bg-gray-50 pt-28 dark:bg-slate-800/40"
    >
      <div className="mx-auto max-w-7xl py-12 px-4 sm:grid sm:grid-cols-2 sm:gap-8 sm:px-6 lg:py-16 lg:px-8">
        <div>
          <header>
            <h1 className="text-lg font-semibold tracking-tight text-blue-500 dark:text-sky-500">
              <span className="underline">Next generation</span> workflow
            </h1>
            <p className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 sm:text-5xl">
              Automatically detects what is affected by your changes
            </p>
          </header>
          <div className="mt-8 flex gap-16 font-normal">
            <p className="max-w-xl text-lg text-slate-700 dark:text-slate-400">
              Nx analyses your projects to improve performance and developer
              experience, then knows how to only rebuild and retest what is
              affected by your change.
            </p>
          </div>
          <div className="action mt-6 flex">
            <Link href="/concepts/affected">
              <a
                title="Read more about affected command"
                className="rounded-full border border-transparent bg-blue-500 py-1 px-3 font-semibold text-white transition hover:bg-blue-600 hover:text-slate-50 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:bg-sky-500 dark:hover:bg-sky-400"
              >
                Read the docs
              </a>
            </Link>
          </div>

          <div className="mt-12">
            <h2 className="sr-only">Tools for every stack</h2>
            <dl className="grid grid-cols-2 gap-8">
              <div key="Tools for every stack" className="group">
                <dt>
                  <div className="relative flex h-12 w-12">
                    <CubeIcon
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
                    Integrates every stack
                  </p>
                </dt>
                <dd className="mt-2 text-base text-slate-500 dark:text-slate-400">
                  Nx is generic at its core and extensible, you can make it work
                  with any technology.
                </dd>
                <Link href="/plugin-features/create-your-own-plugin">
                  <a
                    title="See how to extend Nx with plugins"
                    className="mt-4 inline-flex items-center font-medium text-blue-500 transition hover:text-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:text-sky-500 dark:hover:text-sky-400"
                  >
                    Extend Nx <ArrowRightCircleIcon className="ml-2 h-5 w-5" />
                  </a>
                </Link>
              </div>
              <div key="Prebuilt integrations" className="group">
                <dt>
                  <div className="relative flex h-12 w-12">
                    <CommandLineIcon
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
                    Code generation
                  </p>
                </dt>
                <dd className="mt-2 text-base text-gray-500 dark:text-slate-400">
                  Generate highly customizable code and move, delete or rename
                  projects in the workspace.
                </dd>
                <Link href="/plugin-features/use-code-generators">
                  <a
                    title="Learn how to generate code with Nx"
                    className="mt-4 inline-flex items-center font-medium text-blue-500 transition hover:text-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:text-sky-500 dark:hover:text-sky-400"
                  >
                    Generate code with Nx{' '}
                    <ArrowRightCircleIcon className="ml-2 h-5 w-5" />
                  </a>
                </Link>
              </div>
            </dl>
          </div>
        </div>
        <div aria-hidden="true" className="relative flex h-full w-full">
          <div className="ml-16 max-h-[482px] w-full overflow-hidden rounded-xl border border-gray-200 shadow-xl dark:border-slate-700 lg:absolute lg:h-full lg:w-auto lg:max-w-none">
            <Image
              src="/images/nx-affected.webp"
              alt="Nx affected graph"
              layout={'fixed'}
              width={727}
              height={482}
            />
          </div>
          <div className="absolute bottom-0 z-10 hidden w-[568px] self-start rounded-xl shadow-xl md:flex">
            <div className="coding flex w-full flex-col rounded-lg border border-slate-200 bg-slate-50 p-4 font-mono text-xs leading-normal text-slate-800 subpixel-antialiased shadow-lg dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200">
              <div className="flex items-center">
                <p>
                  <span className="text-base text-purple-600 dark:text-fuchsia-500">
                    →
                  </span>{' '}
                  <span className="mx-1 text-green-600 dark:text-green-400">
                    ~/workspace
                  </span>{' '}
                  <span>$</span>
                </p>
                <p className="typing mt-0.5 flex-1 pl-2">
                  nx affected:test --parallel
                </p>
              </div>
              <div className="flex">
                <p className="typing flex-1 items-center pl-2">
                  <span className="bg-yellow-300 px-1 py-0.5 dark:bg-yellow-600">
                    NX
                  </span>{' '}
                  Affected criteria defaulted to --base=master --head=HEAD
                  <br />
                  <br />
                  <span className="bg-yellow-300 px-1 py-0.5 dark:bg-yellow-600">
                    NX
                  </span>{' '}
                  Running target test for 3 project(s):
                  <br />
                  - nx-dev <br />
                  - nx-dev-ui-common <br />- nx-dev-feature-doc-viewer
                </p>
              </div>
              <div className="mt-2 flex items-center">
                <p>
                  <span className="text-base text-purple-600 dark:text-fuchsia-500">
                    →
                  </span>{' '}
                  <span className="mx-1 text-green-600 dark:text-green-400">
                    ~/workspace
                  </span>{' '}
                  <span>$</span>
                </p>
                <p className="typing mt-0.5 flex-1 pl-2">nx run nx-dev:test</p>
              </div>
              <div className="flex">
                <p className="typing flex-1 items-center pl-2">
                  <span className="bg-yellow-300 px-1 py-0.5 dark:bg-yellow-600">
                    NX
                  </span>
                  <span className="ml-1 bg-green-300 px-1 py-0.5 dark:bg-green-600">
                    RUNS
                  </span>
                  <span className="ml-1 bg-slate-300 px-1 py-0.5 dark:bg-slate-600">
                    nx-dev
                  </span>
                  <br />
                  nx-dev/nx-dev/specs/index.spec.tsx
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
