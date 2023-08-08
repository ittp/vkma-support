import {
  FormItem,
  FormLayout,
  Group,
  IconButton,
  Input,
  List,
  Panel,
  PanelHeader,
  AppRoot,
  Search,
  Select,
  SimpleCell,
  Textarea,
  View,
  HorizontalCell,
} from "@vkontakte/vkui";

// import { ListData } from "../components/list";

export default function App() {
  let options = [{ value: "VZ" }, { value: "KS" }];
  return (
    <View activePanel="profile">
      <Select options={options} />
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
