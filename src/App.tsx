//  Group,
//  List,
//  Panel,
//  PanelHeader,
//  Root,
//  SimpleCell,
//  View,
//  FormItem,
//  FormLayout,
//  Input,
//  Textarea,
//  Select,
//  Switch,
//  Search,




import { Root, View, Panel, PanelHeader, Group, SimpleCell } from  "@vkontakte/vkui";

const icons = require('@vkontakte/icons')

export default function App() {

  const data = {}
  
  
  return (
    <View activePanel="profile">

      <Panel id="profile">
        <PanelHeader>Profile</PanelHeader>
        
        <Group>
          Profile Content
        </Group>
      </Panel>
    </View>
  );
}
