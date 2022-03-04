import BaseFilter, { config, FilterType } from './Filters_BaseFilter'

const BasicFilter = () => (
  <BaseFilter config={config} types={[FilterType.SEARCH_PHRASE, FilterType.CITY]} />
)

export default BasicFilter
