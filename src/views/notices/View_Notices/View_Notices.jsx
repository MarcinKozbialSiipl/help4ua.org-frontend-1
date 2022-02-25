import { withFilters } from '@/app/context/queries/Filters';
import { QueryHasNoResults } from '@/app/context/queries/QueryHasNoResults';
import { QueryHasResults } from '@/app/context/queries/QueryHasResults';
import { QueryProvider } from '@/app/context/queries/QueryProvider';
import { Breadcrumb } from '@/components/common/Breadcrumb'
import { useGetNotices } from '../../../app/CRUD/notices/getNotices';
import NoticesDataTable from './dataTable/DataTable_Notices';
import NoticesFilter from './filters/Filters_Notices';

const breadcrumbItems = [
  {
    label: 'Ogłoszenia',
  },
]

const ViewNotices = () => {
  const query = useGetNotices()
  console.log(query.data);

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <NoticesFilter />
      <div className="flex flex-col lg:flex-row gap-6 mt-4 items-start">
        <QueryProvider {...query}>
          <QueryHasNoResults>
            <div className="bg-white p-8 rounded-xl grow">
              <p className="text-lg text-gray-500 text-center mb-4">Brak ogłoszeń</p>
            </div>
          </QueryHasNoResults>
          <QueryHasResults>
            <div className="bg-white p-4 rounded-lg overflow-x-auto w-full">
              <NoticesDataTable />
            </div>
          </QueryHasResults>
        </QueryProvider>
      </div>
    </>
  )
}

export default withFilters(ViewNotices, {
  params: ['SearchPhrase, PageNumber, PageSize, Province, City, NumberOfPlaces'],
})
