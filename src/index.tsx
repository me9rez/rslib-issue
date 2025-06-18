import {
    defineComponent,
    type ExtractDefaultPropTypes,
    type ExtractPropTypes,
    type ExtractPublicPropTypes,
    Fragment,
    h,
} from "vue";

export const fooProps = {
    name: {
        type: String,
        default: "foo",
    },
};

export type FooProps = ExtractPublicPropTypes<typeof fooProps>;

export const Foo = defineComponent({
    props: fooProps,
    setup(props, { slots, attrs, emit, expose }) {
        return () => {
            return (
                <>
                    <div class="name">name: {props.name}</div>
                    <div>default slot: {slots.default?.({ abc: "data" })}</div>
                </>
            );
        };
    },
});
