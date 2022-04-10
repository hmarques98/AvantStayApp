import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { ExploreStackParamList } from '@services/navigation/Stacks'
import { ExploreStackEnum } from '@shared-models/Navigation'

export type NavigationProps = NativeStackNavigationProp<
  ExploreStackParamList,
  ExploreStackEnum.EXPLORE_HOME_SCREEN
>
