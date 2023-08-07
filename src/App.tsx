import {
  Group,
  List,
  Panel,
  PanelHeader,
  Root,
  SimpleCell,
  View,
  FormItem,
  FormLayout,
  Input,
  Textarea,
  Select,
  Switch,
  Search,
} from "@vkontakte/vkui";

import { ListData } from "../components/list";

export default function App() {
  return (
    <View activePanel="profile">
   
      <Panel id="profile">
        <PanelHeader>Support</PanelHeader>

        <Search />
        <FormItem top={1} bottom={1}>
          <Textarea rows={3} placeholder="Description" />
        </FormItem>
        <Group>
          <List>1</List>
          <SimpleCell>{process.env.API_TOKEN}</SimpleCell>
          <SimpleCell>world</SimpleCell>
        </Group>
      </Panel>
    </View>
  );
}
