import { createStackNavigator } from "react-navigation-stack";
import ChildDashboard from "../screens/childDashboard";
import FamilyDashboard from "../screens/familyDashboard";
import ChallengesDashboard from "../screens/challengeDashboard";
import RewardsDashboard from "../screens/rewardDashboard";

const childStack = createStackNavigator(
  {
    child: {
      screen: ChildDashboard,
      navigationOptions: {
        headerShown: false,
      },
    },
    family: {
      screen: FamilyDashboard,
      navigationOptions: {
        headerTransparent: true,
        title: "Family",
      },
    },
    challenge: {
      screen: ChallengesDashboard,
      navigationOptions: {
        headerTransparent: true,
        title: "Challenges",
      },
    },
    reward: {
      screen: RewardsDashboard,
      navigationOptions: {
        headerTransparent: true,
        title: "Rewards",
      },
    },
  },
  {
    defaultNavigationOptions: {
      headerTitleStyle: {
        fontFamily: "sf-medium",
        fontSize: 26,
      },
    },
  }
);

export default childStack;