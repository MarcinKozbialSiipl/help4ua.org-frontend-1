import Datatable from '@/components/common/Datatable'
import { useQueryContext } from '@/app/context/queries/QueryProvider'
import { useNavigate } from 'react-router-dom'
import usePagination from '@/app/hooks/usePagination'
import dayjs from 'dayjs'
import { route } from '@/app/router/urls/routes'
import { Link } from 'react-router-dom'
import { isBool } from '@/app/utils/isBool'
import { periodsEnum } from '@/app/config/enum/periods'
import { voivodeshipsEnum } from '@/app/config/enum/voivodeships'
import { useTranslation } from 'react-i18next'
import { useSearchParams } from 'react-router-dom'

const columns = [
  {
    name: 'Miasto',
    selector: ({ cityName }) => cityName,
  },
  {
    name: 'Ilość miejsc',
    selector: ({ accommodationPlacesCount }) => accommodationPlacesCount,
  },
  {
    name: 'Imię',
    selector: ({ name }) => name,
  },
  {
    name: 'Adres',
    cell: ({ address, location }) => <a
      href={`http://www.google.com/maps/place/${location?.lat},${location?.long}`}
      className="text-blue-400 hover:text-blue-600"
      target="_blank"
      rel="noreferrer"
      title="Zobacz na mapie"
    >{address}</a>,
  },
  {
    name: 'Telefon',
    selector: ({ phoneNumber }) => phoneNumber,
  },
  {
    name: 'Data dodania',
    selector: ({ createdAt }) => dayjs(createdAt).format('DD.MM.YYYY HH:mm'),
  },
]

const Item = ({label, value}) => {
  return (
    <div className="py-2 flex gap-2">
      <span className="">{label}</span>
      <span className="font-bold">{value}</span>
    </div>
  )
}

export const getValue = val => {
  const {t} = useTranslation();
  
  return isBool(val) ? (
    val ? t('common.tak') : t('common.nie')
  ) : (
    t('common.brakDanych')
  )
}

export const getPeriod = (t, val) => periodsEnum(t).find(item => item.value === val)?.label ?? "Brak danych";


const ExpandedComponent = ({data: {
  description,
  cityName,
  region,
  address,
  bedCount,
  isAcceptedChild,
  isAcceptedAnimal,
  hasWashingMachine,
  period,
  isCatering,
  isDelivery,
  location,
  id,
  name,
  accommodationPlacesCount,
  phoneNumber,
  createdAt,
}}) => {
  const { t } = useTranslation();
  const getRegion = val => voivodeshipsEnum(t).find(item => item.value === val)?.label ?? "";
  const href = location?.lat && location?.long ? `http://www.google.com/maps/place/${location?.lat},${location?.long}` : `https://www.google.com/maps/search/${cityName??''}+${getRegion(region)??''}+${address??''}`
  return (
    <div className="border-b p-4 text-sm bg-[#fafafa] text-center">
      <div className="flex gap-5">
        <div className="flex-1">
          {!!description && <Item label="Opis:" value={description}/>}
          <Item label="Adres:" value={
            <a
              href={href}
              target={'_blank'}
              rel={'noreferrer'}
              title="Zobacz na mapie"
              className="flex flex-col text-blue-700 hover:text-blue-500 items-start"
            >
              <span>{cityName}, {getRegion(region)}</span>
              <span>{address}</span>
            </a>}
          />
          {!!name && <Item label="Imię:" value={name}/>}
          {!! phoneNumber &&<Item label="Telefon:" value={phoneNumber}/>}
          {!! period &&<Item label="Na okres:" value={getPeriod(t, parseInt(period))}/>}
          {!! createdAt &&<Item label="Data dodania:" value={dayjs(createdAt).format('DD.MM.YYYY HH:mm')}/>}
          {!! id &&<Item label="Identyfikator ogłoszenia:" value={id}/>}
        </div>
        <div className="flex-1">
          {!!accommodationPlacesCount && <Item label="Liczba miejsc:" value={accommodationPlacesCount}/>}
          {!!bedCount && <Item label="Liczba łóżek:" value={bedCount}/>}
          <Item label="Przyjmę z małym dzieckiem:" value={getValue(isAcceptedChild)}/>
          <Item label="Przyjmę ze zwierzętami:" value={getValue(isAcceptedAnimal)}/>
          <Item label="Dostęp do pralki:" value={getValue(hasWashingMachine)}/>
          <Item label="Zapewniam wyżywienie:" value={getValue(isCatering)}/>
          <Item label="Zapewniam transport:" value={getValue(isDelivery)}/>
        </div>
      </div>
      <Link to={route['notices.view'](id)} className="text-blue-500 hover:text-blue-300 mt-5 inline-block font-bold">Link</Link>
    </div>
  )
}

const NoticesDataTable = () => {
  const { data } = useQueryContext()
  const pagination = usePagination()
  const [searchParams] = useSearchParams();

  return (
    <Datatable
      columns={columns}
      data={data}
      pointerOnHover
      highlightOnHover
      pagination={pagination}
      paginationPerPage={searchParams.get('pageSize') || '50'}
      paginationComponentOptions={{
        noRowsPerPage: true,
      }}
      expandableRows
      expandableRowsComponent={ExpandedComponent}
      expandOnRowClicked
    />
  )
}
export const NoticesDataTable2 = ({columns, expandableRowsComponent}) => {
  const { data } = useQueryContext()
  const pagination = usePagination()
  const [searchParams] = useSearchParams();

  return (
    <Datatable
      columns={columns}
      data={data}
      pointerOnHover={!!expandableRowsComponent}
      highlightOnHover
      pagination={pagination}
      paginationPerPage={searchParams.get('pageSize') || '50'}
      paginationComponentOptions={{
        noRowsPerPage: true,
      }}
      expandableRows={!!expandableRowsComponent}
      expandableRowsComponent={expandableRowsComponent}
      expandOnRowClicked={!!expandableRowsComponent}
    />
  )
}

export default NoticesDataTable
