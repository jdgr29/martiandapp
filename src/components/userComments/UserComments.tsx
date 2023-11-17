import Image from "next/image";

export const UserComments = (props: { order: boolean }) => {
  return (
    <div className="w-full flex items-center gap-x-9 ">
      <Image
        src={
          "https://images.unsplash.com/photo-1614436163996-25cee5f54290?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=442&q=80"
        }
        width={250}
        height={250}
        className="rounded-full"
        objectFit="cover"
        alt="profile"
      />
      <p
        className={
          props.order ? "order-first text-justify" : "order-last text-justify"
        }
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi officiis
        facere accusantium saepe, quisquam inventore voluptate. Deleniti
        reprehenderit quaerat beatae natus, eveniet, quasi saepe repudiandae
        accusantium enim, architecto amet soluta.
      </p>
    </div>
  );
};
