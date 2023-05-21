import navigationMenuButton from "@/components/UI/buttons/NavigationMenuButton";
import navigationMenu from "@/components/navigationMenu/NavigationMenu";
import releaseButton from "@/components/UI/buttons/ReleaseButton";
import releaseCard from "@/components/UI/card/ReleaseCard";
import inProcessReleases from "@/components/UI/cardsLists/InProcessReleases.vue";
import cardButton from "@/components/UI/buttons/CardButton";
import popupWindow from "@/components/UI/popup/PopupWindow";
import api from "@/api/Api";
import logoButton from "@/components/UI/buttons/LogoButton";
import changeTime from "@/components/UI/form/ChangeTime";
import cardsList from "@/components/UI/cardsLists/CardsList.vue";
import approveRequestedReleases from "@/components/UI/cardsLists/ApproveRequestedReleases.vue";
import plannedReleases from "@/components/UI/cardsLists/PlannedReleases.vue";
import loginForm from "@/components/UI/form/LoginForm.vue";
import registerForm from "@/components/UI/form/RegisterForm.vue";
import releaseTag from "@/components/UI/tags/ReleaseTag.vue";

export default [
    navigationMenuButton,
    navigationMenu,
    releaseButton,
    releaseCard,
    popupWindow,
    api,
    cardButton,
    logoButton,
    changeTime,
    inProcessReleases,
    cardsList,
    approveRequestedReleases,
    plannedReleases,
    loginForm,
    registerForm,
    releaseTag
]