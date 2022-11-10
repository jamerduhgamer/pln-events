import * as React from "react";
import { Section } from "../section";
import { navigationLabelSchema } from "../util/navigation-label";
import { minHeightOptions } from "../util/options"

export const Embed = ({ data, parentField = "" }) => {
  const padding = data.style?.padding
  const width = data.style?.fullWidth ? "" : "max-w-desktop-full mx-auto"

  return (
    <Section
      background={data.background}
      navigationLabel={data.navigationLabel}
    >
      <div className={`bg-white border ${width} ${padding} ${data.style?.minHeight}`}>
        <div dangerouslySetInnerHTML={{ __html: data.markup }}></div>
      </div>
    </Section>
  );
};

export const embedBlockSchema: any = {
  label: "Embed",
  name: "embed",
  fields: [
    {
      label: "Section Style",
      name: "style",
      type: "object",
      fields: [
        {
          label: "Minimum Height",
          name: "minHeight",
          type: "string",
          ui: {
            component: "selectField",
            mobileMode: true,
          },
          options: minHeightOptions,
        },
        {
          label: "Full Width",
          name: "fullWidth",
          type: "boolean",
        },
        {
          label: "Padding",
          name: "padding",
          type: "string",
          ui: {
            component: "paddingControl",
          }
        },
      ],
    },
    // backgroundSchema,
    {
      label: "Background",
      name: "background",
      type: "object",
      fields: [
        {
          type: "string",
          label: "Background",
          name: "fillStyles",
          ui: {
            component: "fillControl"
          }
        },
        {
          label: "Image",
          name: "src",
          type: "image",
          ui: {
            clearable: true,
          }
        },
        {
          label: "Image Position",
          name: "position",
          ui: {
            component: "select",
          },
          type: "string",
          options: [
            { label: "Center", value: "object-center" },
            { label: "Top", value: "object-top" },
            { label: "Right Top", value: "object-right-top" },
            { label: "Right", value: "object-right" },
            { label: "Right Bottom", value: "object-right-bottom" },
            { label: "Bottom", value: "object-bottom" },
            { label: "Left Bottom", value: "object-left-bottom" },
            { label: "Left", value: "object-left" },
            { label: "Left Top", value: "object-left-top" },
          ],
        },
        {
          label: 'Ornaments',
          name: 'ornaments',
          type: "object",
          list: true,
          fields: [
            {
              label: "Image",
              name: "src",
              type: "image",
              ui: {
                clearable: true,
              }
            },
            {
              label: "Alignment",
              name: "alignment",
              ui: {
                component: "select",
              },
              type: "string",
              options: [
                { label: "Center", value: "center" },
                { label: "Top", value: "top" },
                { label: "Right Top", value: "top-right" },
                { label: "Right", value: "right" },
                { label: "Right Bottom", value: "bottom-right" },
                { label: "Bottom", value: "bottom" },
                { label: "Left Bottom", value: "bottom-left" },
                { label: "Left", value: "left" },
                { label: "Left Top", value: "top-left" },
              ],
            },
            {
              label: "Width",
              name: "width",
              type: "string",
            },
            {
              label: "Height",
              name: "height",
              type: "string",
            },
            {
              label: "X Offset",
              name: "xOffset",
              type: "string",
            },
            {
              label: "Y Offset",
              name: "yOffset",
              type: "string",
            },
          ],
        },
      ],
    },
    {
      label: "Html",
      name: "markup",
      description: "Any valid html, you can also use tailwind.",
      type: "string",
      ui: {
        component: "textarea"
      }
    },
    navigationLabelSchema,
  ],
};