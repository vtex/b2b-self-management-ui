import { Button } from "@faststore/ui";

export type SelfManagementPageProps = {
  onClick(): void;
  content: string;
  buttonLabel: string;
  title: string;
};

export const SelfManagementPage = ({
  title,
  content,
  buttonLabel,
  onClick,
}: SelfManagementPageProps) => (
  <section data-fs-self-management-section>
    <h1 data-fs-self-management-title>{title}</h1>
    <code data-fs-self-management-code>{content}</code>
    <Button variant="primary" onClick={onClick}>
      {buttonLabel}
    </Button>
  </section>
);
