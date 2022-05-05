### Folders

```
src
 - component-libraries
    - sb-core          - core field components (Text, Number, Choice)
    - sb-property      - field components related to property fields (Price, legal parameters, amenities, whatever).
                         Extends sb-core.
    - uikit            - raw UI controls (input, select, checkbox etc).
                         Not field components, just a plain UI library.
                         May be replaced by MaterialUI, etc.
 - forms
    - types.ts         - core type system
    - Form.tsx         - renders a form
    - FieldLayout*.tsx - layout managers for single fields

```

