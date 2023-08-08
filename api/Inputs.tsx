const ExampleBase = ({ formItemStatus }) => {
  const [before, setBefore] = useState(undefined);
  const [after, setAfter] = useState(undefined);
  const [align, setAlign] = useState('left');
  const [disabled, setDisabled] = useState(false);

  return (
    <FormLayout>
      <FormItem top="align">
        <Select
          value={align}
          onChange={(e) => setAlign(e.target.value)}
          options={[
            { label: 'left', value: 'left' },
            { label: 'center', value: 'center' },
            { label: 'right', value: 'right' },
          ]}
        />
      </FormItem>
      <Checkbox
        description="Icon24WalletOutline for example"
        checked={!!before}
        onChange={(e) =>
          e.target.checked ? setBefore(<Icon24WalletOutline />) : setBefore(undefined)
        }
      >
        before
      </Checkbox>
      <Checkbox
        description="Icon20User for example"
        checked={!!after}
        onChange={(e) => (e.target.checked ? setAfter(<Icon20User />) : setAfter(undefined))}
      >
        after
      </Checkbox>
      <Checkbox checked={disabled} onChange={(e) => setDisabled(e.target.checked)}>
        disabled
      </Checkbox>
      <FormItem htmlFor="example" top="📝 Пример" status={formItemStatus}>
        <Input
          id="example"
          before={before}
          after={after}
          type="text"
          align={align}
          defaultValue="Lorem ipsum dolor sit amet"
          disabled={disabled}
        />
      </FormItem>
    </FormLayout>
  );
};

const ExampleWithIcon = ({ formItemStatus }) => {
  const textInput = React.createRef();
  const clear = () => (textInput.current.value = '');

  return (
    <FormLayout>
      <FormItem
        htmlFor="exampleClickable"
        top="📝 Пример с кликабельной иконкой"
        status={formItemStatus}
      >
        <Input
          id="exampleClickable"
          getRef={textInput}
          type="text"
          placeholder="Ну ведь брокколи это вкусно и полезно 😢"
          defaultValue="Брокколи 🥦"
          after={
            <IconButton hoverMode="opacity" aria-label="Очистить поле" onClick={clear}>
              <Icon16Clear />
            </IconButton>
          }
        />
      </FormItem>
    </FormLayout>
  );
};

const Example = () => {
  const [sizeY, setSizeY] = useState('regular');
  const [formItemStatus, setFormItemStatus] = useState('default');

  return (
    <AdaptivityProvider sizeY={sizeY}>
      <div style={rootContainerStyles}>
        <div style={demoContainerStyles}>
          <ExampleBase formItemStatus={formItemStatus} />
          <Spacing size={16} />
          <Separator />
          <Spacing size={16} />
          <ExampleWithIcon formItemStatus={formItemStatus} />
        </div>

        <div style={propsContainerStyles}>
          <FormItem top="AdaptivityProvider[sizeY]">
            <Select
              value={sizeY}
              onChange={(e) => setSizeY(e.target.value)}
              options={[
                { label: 'compact', value: 'compact' },
                { label: 'regular', value: 'regular' },
              ]}
            />
          </FormItem>
          <FormItem top="FormItem[status]">
            <Select
              value={formItemStatus}
              onChange={(e) => setFormItemStatus(e.target.value)}
              options={[
                { label: 'default', value: 'default' },
                { label: 'error', value: 'error' },
                { label: 'valid', value: 'valid' },
              ]}
            />
          </FormItem>
        </div>
      </div>
    </AdaptivityProvider>
  );
};

const rootContainerStyles = {
  display: 'flex',
  flexDirection: 'row-reverse',
  flexWrap: 'wrap',
};

const demoContainerStyles = {
  flexGrow: 2,
  minWidth: 320,
};

const propsContainerStyles = {
  minWidth: 200,
  marginRight: 'auto',
};

<Example />;
