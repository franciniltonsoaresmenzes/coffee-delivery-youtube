import CompliteOrderForm from "./components/CompliteOrderForm";
import SelectedCoffees from "./components/SelectedCoffees";
import { CompliteOrderContainer } from "./styles";
import * as zod from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, FormProvider } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../hooks/useCarts";

enum paymentMethods {
  credit = "credit",
  debit = "debit",
  money = "money",
}

const confirmOrderFormValidationSchema = zod.object({
  cep: zod.string().min(1, "Informe o CEP"),
  street: zod.string().min(1, "Informe o Rua"),
  number: zod.string().min(1, "Informe o Número"),
  complement: zod.string(),
  district: zod.string().min(1, "Informe o Bairro"),
  city: zod.string().min(1, "Informe a Cidade"),
  uf: zod.string().min(1, "Informe a UF"),
  paymentMethod: zod.nativeEnum(paymentMethods, {
    errorMap: () => {
      return { message: "Informe o método de pagamento" }
    },
  }),
})

export type OrderData = zod.infer<typeof confirmOrderFormValidationSchema>;

type ConfirmOrderFormData = OrderData;

const CompliteOrder: React.FC = () => {
  const confirmOrderForm = useForm<ConfirmOrderFormData>({
    resolver: zodResolver(confirmOrderFormValidationSchema)
  })

  const { handleSubmit } = confirmOrderForm;

  const navigate = useNavigate()
  const { cleanCart } = useCart()

  function handleConfirmOrder(data: ConfirmOrderFormData) {
    navigate("/orderConfirmed", {
      state: data
    })
    cleanCart()
  }

  return (
    <FormProvider {...confirmOrderForm} >
       <CompliteOrderContainer 
        className="container" 
        onSubmit={handleSubmit(handleConfirmOrder)} 
      >
        <CompliteOrderForm/>
        <SelectedCoffees/>
      </CompliteOrderContainer>
    </FormProvider>
  );
}

export default CompliteOrder;
