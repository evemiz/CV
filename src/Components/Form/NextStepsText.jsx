import { useTranslation } from 'react-i18next';

const useTranslatedTexts = () => {
  const { t } = useTranslation();

  return {
    experienceText: {
      header: t('experienceText_header'),
      description: t('experienceText_description'),
      titlePlaceholder: t('experienceText_titlePlaceholder'),
      subTitle: t('experienceText_subTitle'),
      subTitlePlaceholder: t('experienceText_subTitlePlaceholder'),
      contentPlaceholder: t('experienceText_contentPlaceholder')
    },
    educationText: {
      header: t('educationText_header'),
      description: t('educationText_description'),
      titlePlaceholder: t('educationText_titlePlaceholder'),
      subTitle: t('educationText_subTitle'),
      subTitlePlaceholder: t('educationText_subTitlePlaceholder'),
      contentPlaceholder: t('educationText_contentPlaceholder')
    },
    volunteeringText: {
      header: t('volunteeringText_header'),
      description: t('volunteeringText_description'),
      titlePlaceholder: t('volunteeringText_titlePlaceholder'),
      subTitle: t('volunteeringText_subTitle'),
      subTitlePlaceholder: t('volunteeringText_subTitlePlaceholder'),
      contentPlaceholder: t('volunteeringText_contentPlaceholder')
    },
    projectsText: {
      header: t('projectsText_header'),
      description: t('projectsText_description'),
      titlePlaceholder: t('projectsText_titlePlaceholder'),
      subTitle: t('projectsText_subTitle'),
      subTitlePlaceholder: t('projectsText_subTitlePlaceholder'),
      contentPlaceholder: t('projectsText_contentPlaceholder')
    },
    languagesText: {
      title: t('languagesText_title'),
      header: t('languagesText_header'),
      placeholder: t('languagesText_placeholder'),
      haveSelect: true
    },
    hobbiesText: {
      title: t('hobbiesText_title'),
      header: t('hobbiesText_header'),
      placeholder: t('hobbiesText_placeholder'),
      haveSelect: false
    }
  };
};

export default useTranslatedTexts;
