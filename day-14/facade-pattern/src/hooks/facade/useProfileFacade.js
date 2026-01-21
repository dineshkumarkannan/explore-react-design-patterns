import { useUserDetails } from "../useUserDetails";

export const useProfileFacade = () => {
  const userDetails = useUserDetails();

  const userName = userDetails.name;

  const isProfileComplete = userDetails.profileCompletionPer === 100 ?? false;

  const canEditProfile = userDetails.canEdit ?? false;

  return {
    userName,
    isProfileComplete,
    canEditProfile,
  };
};
