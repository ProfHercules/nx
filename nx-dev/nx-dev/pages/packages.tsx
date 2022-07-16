import { MenuItem, MenuSection } from '@nrwl/nx-dev/models-menu';
import {
  Breadcrumbs,
  DocumentationHeader,
  Footer,
  SidebarContainer,
} from '@nrwl/nx-dev/ui-common';
import {
  ReferencesIndexItem,
  ReferencesSection,
} from '@nrwl/nx-dev/ui-references';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { Heading1 } from '../../feature-package-schema-viewer/src/lib/ui/headings';
import { iconsMap } from '../../ui-references/src/lib/icons-map';
import { nxMenuApi } from '../lib/api';
import { useNavToggle } from '../lib/navigation-toggle.effect';

interface ReferencesProps {
  references: MenuSection;
}

export async function getStaticProps(): Promise<{ props: ReferencesProps }> {
  return {
    props: {
      references: nxMenuApi.getReferenceApiMenuSection(),
    },
  };
}

const nxPackageIds = ['nx', 'workspace', 'devkit', 'nx-plugin'];

export default function Packages(props: ReferencesProps): JSX.Element {
  const router = useRouter();
  const { toggleNav, navIsOpen } = useNavToggle();
  // const [pathname, hash = ''] = router.asPath.split('#');
  // const validIds = useMemo(
  //   () => props.references.itemList.map((item) => item.id),
  //   [props.references]
  // );
  // const idFromHash = validIds.some((id) => hash === id) ? hash : '';
  // const [targetPackageId, setTargetPackageId] = useState<string>('');
  //
  // // Only run this effect initially to sync the id once, or else we run into a hydration warning.
  // useEffect(() => {
  //   setTargetPackageId(idFromHash);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  //
  // // Update URL for deep-links
  // useEffect(() => {
  //   if (hash === targetPackageId) return;
  //   if (targetPackageId) {
  //     router.replace(`${pathname}#${targetPackageId}`);
  //   } else {
  //     router.replace(pathname, undefined, { scroll: false });
  //   }
  // }, [pathname, router, targetPackageId, hash]);
  //
  // const updateTargetPackageId = useCallback(
  //   (id: string) =>
  //     id === targetPackageId ? setTargetPackageId('') : setTargetPackageId(id),
  //   [targetPackageId]
  // );
  const references: MenuItem[] = useMemo(
    () =>
      [
        ...nxPackageIds.map((id) =>
          props.references.itemList.find((pkg) => pkg.id === id)
        ),
        ...props.references.itemList.filter(
          (pkg) => !nxPackageIds.includes(pkg.id)
        ),
      ].filter((pkg): pkg is MenuItem => !!pkg),
    [props.references]
  );

  return (
    <>
      <NextSeo
        title="Reference: Official Packages & API"
        description="Reference: Official Packages & API"
        openGraph={{
          url: 'https://nx.dev' + router.asPath,
          title: 'Reference: Official Packages & API',
          description: 'Reference: Official Packages & API',
          images: [
            {
              url: 'https://nx.dev/images/nx-media.jpg',
              width: 800,
              height: 400,
              alt: 'Nx: Smart, Fast and Extensible Build System',
              type: 'image/jpeg',
            },
          ],
          site_name: 'NxDev',
          type: 'website',
        }}
      />
      <div id="shell" className="flex h-full flex-col">
        <div className="w-full flex-shrink-0">
          <DocumentationHeader isNavOpen={navIsOpen} toggleNav={toggleNav} />
        </div>
        <main
          id="main"
          role="main"
          className="flex h-full flex-1 overflow-y-hidden"
        >
          <SidebarContainer
            menu={{ sections: props.references.itemList }}
            navIsOpen={navIsOpen}
          />
          <div
            id="wrapper"
            data-testid="wrapper"
            className="flex flex-grow flex-col items-stretch justify-start overflow-y-scroll"
          >
            <div className="mx-auto w-full grow items-stretch px-4 sm:px-6 lg:px-8 2xl:max-w-6xl">
              <div id="content-wrapper" className="w-full flex-auto flex-col">
                <div className="mb-6 pt-8">
                  <Breadcrumbs path={router.asPath} />
                </div>
                <Heading1 title={'Official Packages Reference'} />

                <section id="packages-section" className="py-12">
                  <nav
                    aria-labelledby="package-index-navigation"
                    className="relative mb-24 grid grid-cols-2 gap-4 md:grid-cols-4"
                  >
                    {references.map((category: MenuItem, index, all) => (
                      // <ReferencesIndexItem
                      //   key={'ref-' + category.id}
                      //   path={category.path as string}
                      //   name={category.name as string}
                      //   id={category.id}
                      //   active={targetPackageId}
                      //   callback={updateTargetPackageId}
                      // />
                      <Link
                        key={'ref-' + category.id}
                        href={category.path as string}
                      >
                        <a className="group relative flex items-center justify-center gap-3 overflow-hidden rounded-lg border border-slate-200 px-3 py-2 text-slate-700 transition hover:bg-slate-50">
                          <img
                            className="h-5 w-5 object-cover opacity-75"
                            loading="lazy"
                            src={iconsMap[category.id]}
                            alt={category.name + ' illustration'}
                            aria-hidden="true"
                          />

                          <span className="text-base font-medium">
                            {category.name}
                          </span>
                        </a>
                      </Link>
                    ))}
                  </nav>

                  {/*{references*/}
                  {/*  .filter((pkg) =>*/}
                  {/*    !!targetPackageId ? pkg.id === targetPackageId : true*/}
                  {/*  )*/}
                  {/*  .map((category: MenuItem, index, all) => (*/}
                  {/*    <div*/}
                  {/*      key={[category.id, index].join('-')}*/}
                  {/*      className="py-10"*/}
                  {/*    >*/}
                  {/*      <ReferencesSection section={category} />*/}
                  {/*      {!(index + 1 === all.length) && (*/}
                  {/*        <div className="inset-x-0 bottom-0 mt-8 h-1 rounded-full bg-gradient-to-r from-[#8154E8] to-[#47BC99]"></div>*/}
                  {/*      )}*/}
                  {/*    </div>*/}
                  {/*  ))}*/}
                </section>
              </div>
            </div>
            <Footer />
          </div>
        </main>
      </div>
    </>
  );
}
