import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";

export default function Simple() {
  return (
    <Container maxW={"7xl"}>
      <SimpleGrid
        columns={1}
        spacing={15}
        paddingTop={5}
      >
        <Flex>
          <Image
            rounded={"md"}
            alt={"product image"}
            src={
              "https://plus.unsplash.com/premium_photo-1673334104679-fa8e3751cc17?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2060&q=80"
            }
            fit={"cover"}
            align={"center"}
            w={"100%"}
            h={{ base: "100%", sm: "400px", lg: "500px" }}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Heading as={"h2"}>blog title</Heading>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
            fugiat non. Soluta adipisci incidunt ratione facilis praesentium
            voluptatem quae atque illum unde magnam error animi qui dolor
            expedita culpa ducimus, doloremque quam accusantium? Perspiciatis
            possimus obcaecati vero provident voluptate iste consectetur minima
            officiis? Natus praesentium ducimus blanditiis officia non id unde
            repudiandae et reprehenderit tenetur quae quam sint corporis iste
            incidunt harum mollitia adipisci rem assumenda, at in perspiciatis
            rerum. Distinctio vel repellat culpa molestiae quibusdam sequi quod
            odio animi ipsam ratione suscipit, et accusamus odit deleniti nulla
            neque minus officia illo! Cupiditate dolorum corrupti molestiae
            consequuntur eveniet necessitatibus voluptates?
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui est id
            neque laudantium hic? Voluptas eligendi vero numquam modi nemo, odit
            magnam incidunt iure, mollitia eum id qui vel enim. Asperiores quia
            at ducimus numquam repellat officia, repudiandae ex, illum et,
            accusamus odit soluta sapiente harum dolorum quam ullam delectus.
            Temporibus accusantium cupiditate labore, dolor laboriosam eius,
            minus deserunt, expedita alias voluptatibus omnis fugiat aliquid.
            Consectetur ducimus vel quas minus fugit eum tenetur perspiciatis
            mollitia ea laudantium ab facilis impedit harum, accusamus odio
            doloremque laboriosam nobis? Animi nulla laudantium distinctio.
            Neque quos at cupiditate quas possimus iusto ullam, ex aperiam a
            quasi. Iste facilis recusandae natus amet fugit, iure blanditiis
            voluptate. Veritatis sed nostrum, deleniti, beatae aut ipsam
            asperiores magni unde nihil deserunt ea voluptatem recusandae
            ratione aliquam ipsum nulla, eius neque. Modi maiores rem ad
            laboriosam suscipit quos eaque aut hic, blanditiis ullam optio id
            sapiente cupiditate qui quaerat magni libero itaque nam distinctio
            assumenda non iusto, omnis quia! Impedit omnis expedita itaque
            aliquid sint, obcaecati ex assumenda rerum possimus ratione, placeat
            adipisci facere, libero mollitia enim. Perferendis vitae nemo
            impedit ut eaque consequatur sapiente aut deserunt provident!
            Blanditiis nostrum culpa accusantium voluptates ex molestias
            excepturi atque laborum voluptas!
          </Text>
          <Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat,
            iusto alias ipsum numquam dolores vel amet quisquam minus ullam
            provident rerum neque repudiandae, fuga commodi voluptatibus cumque
            dolore reiciendis maxime dolorem quidem. Sit eveniet officiis saepe
            similique obcaecati dicta et culpa in incidunt voluptatum a facilis
            dolores numquam, unde sed totam voluptate, tempora veritatis eum!
            Accusamus, expedita delectus dicta quos laboriosam laborum, quae
            facilis illo incidunt laudantium reprehenderit blanditiis molestiae
            veniam unde in rem magnam? Delectus asperiores excepturi velit sed a
            labore aliquam voluptatibus temporibus, alias ad sit molestiae non,
            suscipit cumque animi, id corporis quis eum amet ducimus magni quae
            fugiat ullam quisquam. Et enim velit itaque, id fugiat qui alias
            doloremque, ullam reprehenderit hic nesciunt rem amet praesentium
            cum veniam voluptates distinctio beatae possimus sunt quod.
            Dignissimos quidem sit alias at impedit rem hic quam blanditiis, est
            optio suscipit eius maiores vitae iste voluptatem quod. Minima,
            natus nam!
          </Text>
          <Text>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit ad
            consequatur aliquam quae quo officiis accusamus voluptatibus,
            dolorum aspernatur quis, possimus nobis eligendi et explicabo dolor
            nisi quia, odit animi expedita eaque blanditiis minima atque ipsa.
            Repellendus similique, dolores libero odit iure aut corporis? Vero
            repellendus nesciunt suscipit quas ducimus.
          </Text>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}
