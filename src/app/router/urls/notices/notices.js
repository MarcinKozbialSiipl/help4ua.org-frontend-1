import { BASE_URL } from '../../../config/env'

export const noticesRoutes = {
  'notices.list': `${BASE_URL}/ogloszenia`,
  'notices.list2': `${BASE_URL}/ogloszenia/szukam-schronienia`,
  'notices.list3': `${BASE_URL}/ogloszenia/oferuje-schronienie`,
  'notices.list4': `${BASE_URL}/ogloszenia/oferuje-transport`,
  'notices.list5': `${BASE_URL}/ogloszenia/oferuje-pomoc`,
  'notices.list6': `${BASE_URL}/ogloszenia/szukam-transportu`,
  'notices.list7': `${BASE_URL}/ogloszenia/oferuje-tlumaczenia`,
  'notices.list8': `${BASE_URL}/ogloszenia/szukam-pomocy`,
  'notices.list9': `${BASE_URL}/ogloszenia/szukam-pomocy-w-tlumaczeniu`,
  'notices.list10': `${BASE_URL}/ogloszenia/oferuje-dom-tymczasowy`,
  'notices.list11': `${BASE_URL}/ogloszenia/szukam-domu-tymczasowego`,
  'notices.list12': `${BASE_URL}/ogloszenia/szukam-pomocy-medycznej`,
  'notices.list13': `${BASE_URL}/ogloszenia/oferuje-pomoc-prawna`,
  'notices.list14': `${BASE_URL}/ogloszenia/szukam-pomocy-prawnej`,
  'notices.list15': `${BASE_URL}/ogloszenia/offer-medical-assistance`,
  'notices.list16': `${BASE_URL}/ogloszenia/offer-volunteers-help`,
  'notices.list17': `${BASE_URL}/ogloszenia/find-volunteers-help`,
  'notices.list110': `${BASE_URL}/ogloszenia/offer-work`,
  'notices.list112': `${BASE_URL}/ogloszenia/lf-work`,
  'notices.view': (noticeId = ':noticeId') => `${BASE_URL}/ogloszenia/${noticeId}`,
  'notices.add': `${BASE_URL}/dodaj-ogloszenie`,
  'notices.addShelterOffer': `${BASE_URL}/dodaj-ogloszenie/oferuje-schronienie`,
  'notices.addFindShelter': `${BASE_URL}/dodaj-ogloszenie/szukam-schronienia`,
  'notices.addTransportOffer': `${BASE_URL}/dodaj-ogloszenie/oferuje-transport`,
  'notices.addFindTransportOffer': `${BASE_URL}/dodaj-ogloszenie/szukam-transportu`,
  'notices.addHelpOffer': `${BASE_URL}/dodaj-ogloszenie/oferuje-pomoc`,
  'notices.addlegalHelpOffer': `${BASE_URL}/dodaj-ogloszenie/oferuje-pomoc-prawna`,
  'notices.addTranslationOffer': `${BASE_URL}/dodaj-ogloszenie/oferuje-tlumaczenia`,
  'notices.addFindHelp': `${BASE_URL}/dodaj-ogloszenie/szukam-pomocy`,
  'notices.addfindLegalHelp': `${BASE_URL}/dodaj-ogloszenie/szukam-pomocy-prawnej`,
  'notices.addFindTranslationOffer': `${BASE_URL}/dodaj-ogloszenie/szukam-pomocy-w-tlumaczeniu`,
  'notices.addTemporaryAnimalHome': `${BASE_URL}/dodaj-ogloszenie/oferuje-dom-tymczasowy`,
  'notices.addFindTemporaryAnimalHome': `${BASE_URL}/dodaj-ogloszenie/szukam-domu-tymczasowego`,
  'notices.addFindMedicalAssistance': `${BASE_URL}/dodaj-ogloszenie/szukam-pomocy-medycznej`,
  'notices.addOfferMedicalAssistance': `${BASE_URL}/dodaj-ogloszenie/offer-medical-assistance`,
  'notices.addVolunteersOfferingHelp': `${BASE_URL}/dodaj-ogloszenie/offer-volunteers-help`,
  'notices.addFindVolunteersHelp': `${BASE_URL}/dodaj-ogloszenie/find-volunteers-help`,
  'notices.addOfferWork': `${BASE_URL}/dodaj-ogloszenie/offer-work`,
  'notices.addFindWork': `${BASE_URL}/dodaj-ogloszenie/find-work`,
  'notices.success': `${BASE_URL}/dodaj-ogloszenie/sukces`,
  'notices.edit': (id = ':id', token = ':token') => `${BASE_URL}/e/${id}/${token}`,
  'notices.edit2': (id = ':id', token = ':token', pin = ':pin') =>
    `${BASE_URL}/e/${id}/${token}/${pin}`,
}
