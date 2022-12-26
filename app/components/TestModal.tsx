"use client";

import { IModalRef } from "#root/types";
import { MutableRefObject, useRef } from "react";
import Modal from "./Modal";

export default function TestModal() {
  const modalRef = useRef() as MutableRefObject<IModalRef>;
  const openModal = () => modalRef.current?.open();

  return (
    <>
      <button onClick={openModal}>Open</button>
      <Modal
        title="Lorem Ipsum"
        cancelLabel="close"
        submitLabel="done"
        submitAction={() => console.log("submit")}
        ref={modalRef}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
        reiciendis id suscipit ullam illum magni aspernatur, veniam
        reprehenderit mollitia odit aliquam. Itaque magnam repudiandae autem
        modi inventore laudantium neque corporis? Nulla aliquam ex, fugit iusto
        error expedita sequi, excepturi reprehenderit modi natus perspiciatis
        molestias esse! Nemo fugiat inventore mollitia hic explicabo porro
        adipisci velit similique necessitatibus. Architecto consequatur magni
        facilis. Quisquam, magnam molestias quas rerum dignissimos provident
        natus repellat, nobis quo saepe at ducimus dicta amet unde dolorum
        beatae perferendis reprehenderit cum totam pariatur consectetur eaque
        quidem nostrum fuga! A. Mollitia delectus consequuntur at, molestiae,
        nulla nisi alias reiciendis pariatur aut voluptatibus voluptatum
        eligendi odit? Praesentium, voluptates debitis! Molestias nobis,
        voluptatem minus culpa distinctio architecto sapiente officiis sunt
        officia assumenda. Asperiores sint quia corporis illo consectetur
        perferendis ad, aliquam, recusandae similique aut at sed ab distinctio
        animi. Placeat beatae alias doloribus quidem totam quasi ex aspernatur,
        hic perspiciatis dolorum dicta? Dolores, magni. Inventore possimus esse
        eveniet dolor maxime, cum error mollitia temporibus quo deserunt nobis
        aliquid quae dignissimos libero nulla iusto asperiores perspiciatis
        laborum quidem dolores itaque necessitatibus tenetur! Est! Quos, dolor
        esse quis voluptates ipsam, aut quam minus adipisci, laudantium iure
        laborum itaque unde? Ipsa aliquid velit itaque enim. Officiis quasi ut
        nobis alias eos, vel quidem dolor officia. Accusamus quas doloribus
        maxime temporibus ea. Placeat accusamus hic dolor esse ratione amet ab
        cupiditate quis, incidunt laborum maiores. Quia velit totam neque ea non
        dolorum facilis sit minima alias. Qui quam, rerum expedita itaque nisi
        animi laboriosam necessitatibus fugit et porro omnis odit, quas neque ut
        placeat voluptatum libero, hic magnam quis adipisci. Hic magnam ducimus
        velit placeat sapiente. Beatae animi reprehenderit veniam dignissimos
        sequi ducimus voluptatibus quam magni quaerat esse est tenetur eum
        facere expedita ullam quod ab vel mollitia reiciendis quis tempore,
        placeat assumenda incidunt laudantium. Sequi! Tempora voluptate
        architecto quae, odit nam veritatis natus ullam dolore. Delectus rerum
        corrupti dolorum laborum suscipit pariatur, voluptate nam reprehenderit,
        sint veritatis perspiciatis quasi, unde non commodi ratione velit
        soluta! Doloribus deleniti distinctio qui itaque. Omnis, obcaecati,
        fugit nostrum cum quidem impedit suscipit natus quae esse dolor commodi
        laborum recusandae deleniti praesentium porro. Dolorem eaque doloremque
        dignissimos saepe sed inventore? Praesentium ducimus quisquam voluptate
        repellendus autem quam tempore nostrum, beatae veritatis aliquid natus
        corrupti dolore! Quas nihil rerum dolores beatae, quidem sapiente
        officiis unde alias quae voluptate, ratione neque? Quidem. Dolore
        voluptatem obcaecati culpa, doloremque recusandae temporibus
        voluptatibus facilis hic quod maiores voluptatum. Quos officia harum
        expedita delectus beatae alias labore rerum? Aut, consequatur explicabo
        quibusdam odit numquam ratione nostrum! Ipsam nisi non cupiditate ad
        dolores tenetur recusandae voluptates, ipsa ullam laboriosam
        exercitationem id inventore aspernatur, distinctio pariatur corrupti
        quidem maxime accusamus, velit quisquam. Sit id repellendus eveniet
        eaque repudiandae! Fugiat iusto cum debitis rerum est? Eum, in.
        Voluptatem minus quas porro asperiores facilis expedita laboriosam,
        commodi odio maxime quae! Cum molestias ducimus similique eaque ut neque
        harum sunt voluptas. Iure iste fugiat rerum sint quis esse, consequuntur
        temporibus. Assumenda corporis enim doloremque cum deleniti perspiciatis
        tempore quam at. Similique dicta placeat, quidem magnam omnis deserunt
        cum mollitia esse totam. Delectus magni dicta at blanditiis, perferendis
        quaerat. Similique consequatur minima, quibusdam quo voluptas doloribus
        veniam, delectus voluptatibus est ratione, dolores quaerat! Ipsam atque
        nulla culpa corporis dignissimos tempore recusandae illo. Veritatis
        saepe, consequatur non possimus laudantium dignissimos ut soluta vero
        numquam nemo at ducimus ea nesciunt enim sit doloremque sequi iure nisi
        nulla exercitationem vel in voluptates. Veritatis, recusandae inventore?
        Ipsa a sed aliquam eaque rem nihil dolore. Tempora vitae voluptatem
        obcaecati esse iste modi animi, in veniam necessitatibus minima
        repudiandae quae qui placeat perferendis, deleniti aperiam, labore
        laborum eius? Temporibus quisquam iure velit ex voluptates magnam vel
        sunt quae eius omnis doloremque maxime numquam non, labore quidem amet
        quis? Laudantium dolorem illum hic blanditiis ipsam optio, ea eos
        voluptate. Rem molestiae fugit hic dolore facilis eum vero repudiandae
        exercitationem, aliquam quia natus, inventore, assumenda ratione aut
        veritatis? Natus, tenetur! Eligendi asperiores dolores sapiente aliquid
        ab soluta iusto minus ipsum. Laboriosam, ipsa. Saepe quas dolorum, aut
        cupiditate nemo laboriosam voluptate repellat voluptatem maxime, unde
        porro maiores beatae et voluptates temporibus nesciunt a natus? Totam
        quos quisquam at aut asperiores dolore? Inventore, distinctio! Dolorum
        nam consequuntur voluptas quos illum quibusdam, neque delectus
        distinctio laborum? Nemo, quod ipsum. Inventore esse, incidunt molestiae
        corrupti, culpa natus optio nesciunt accusamus illum ipsum odio
        asperiores. Eveniet accusamus laborum alias? Deleniti, tempore fugit
        ratione expedita dignissimos molestiae nisi unde voluptas molestias vero
        qui quo eos sequi labore perferendis modi quidem ipsam aperiam sed ipsum
        ad odit? Eius, voluptate enim! Aliquid, mollitia? Harum, debitis
        repellendus? Odio quaerat sint itaque aut, sequi totam voluptatem
        dolorum unde cumque voluptates corporis nisi praesentium reiciendis
        ipsum cupiditate. Expedita officiis recusandae eius? Vel fuga eveniet
        cum non distinctio labore nobis sunt eligendi sequi sed at corrupti,
        autem laudantium aliquid fugiat blanditiis quod tenetur accusantium
        velit aut in consectetur iste excepturi doloremque. Inventore! Minus
        recusandae praesentium dicta consequuntur repellat aperiam odit adipisci
        quos incidunt culpa, voluptate ex odio molestias, pariatur itaque
        provident, cum consectetur neque ducimus dolore a maxime aut numquam
        ipsam? Voluptates. Odio, voluptate magnam? Repellendus fugit molestiae
        eos voluptas asperiores assumenda laborum provident expedita, at
        corrupti facere earum vero quia modi veritatis dolores repellat eveniet
        adipisci reprehenderit, nam minus aspernatur tenetur! Incidunt quae
        similique eum hic, magnam perspiciatis totam animi minima numquam nam
        culpa voluptatem sit doloremque rem. Fugiat, perferendis pariatur. Id
        modi reiciendis eius, aperiam deleniti repellat quae impedit
        perspiciatis! Officiis dolorem deserunt error ipsam distinctio aliquam
        voluptatibus, cumque labore voluptatum sint commodi, aut earum assumenda
        ducimus alias consequatur quia veritatis eius, ad reiciendis. Aliquid
        expedita error voluptates culpa aut? Corporis ad id temporibus a ut
        aliquam possimus unde voluptatem voluptas asperiores eius nisi pariatur,
        reiciendis quis, aperiam aspernatur iusto. Eos cum nisi cupiditate?
        Pariatur magni cum dolorum aperiam tempore! Excepturi quas tempore
        doloremque cumque, ipsam officiis reprehenderit tempora rem fugiat,
        repellat temporibus deserunt ratione saepe. Doloremque optio unde minus
        distinctio perspiciatis cum quod vitae quasi, nihil amet veritatis est!
        Earum nisi velit recusandae odio! Velit saepe eum veniam enim nesciunt
        ea error ratione temporibus tempore voluptatem vero libero, beatae
        pariatur explicabo dolor quis doloribus dolores, distinctio sed corporis
        fugit. Architecto autem nam ratione dignissimos, voluptatibus excepturi
        possimus labore minus veritatis doloribus, exercitationem a, alias
        doloremque! Dicta pariatur fuga, recusandae saepe ratione dolores
        corrupti cum sit debitis, nemo, et quod. Sit accusantium tenetur totam,
        ducimus iure est commodi iste exercitationem aperiam eveniet nesciunt
        quia suscipit. Omnis, pariatur! Ipsa praesentium, quos cumque impedit a
        beatae voluptas? Ea nostrum ipsum illum eum? Natus eos odit provident
        obcaecati nihil tenetur esse modi assumenda necessitatibus rerum commodi
        cupiditate officia nulla, suscipit blanditiis non id magnam quis
        deleniti, facilis iste. Voluptatem a minima quam natus. Nobis numquam
        excepturi accusantium facilis atque omnis ipsam dolorem eos vitae
        reprehenderit obcaecati quod at nisi esse maxime corporis, sit magni
        doloribus porro, aliquid quas possimus quae? Aliquid, atque in? Quisquam
        veritatis omnis cumque magni repellendus ex non officiis autem eos
        vitae, nemo ducimus quo repellat voluptate a explicabo numquam deleniti
        distinctio totam sit! Tempore at nam ab quasi incidunt. Ducimus omnis
        nesciunt, sint excepturi, blanditiis, obcaecati provident minima
        dignissimos suscipit atque rem consequatur tempore! Iure enim sint harum
        dolorum assumenda incidunt, amet obcaecati rerum possimus facere eius
        sed aut. Tenetur, explicabo voluptatum? Neque voluptas, quam, earum quos
        numquam commodi obcaecati magnam adipisci mollitia deleniti eos officiis
        velit iure doloremque quod nihil assumenda quidem esse ipsa ut veniam
        vero quo. Odio, minus ducimus modi corporis at nihil? Consequatur quasi,
        fuga saepe quod, tempore nihil alias nobis autem sit quisquam tempora
        voluptatem necessitatibus iure doloremque ad officia ducimus nostrum nam
        nesciunt! Ea, repudiandae explicabo doloremque exercitationem nisi
        dolorum ad optio accusamus minima at expedita aut rerum nulla numquam
        perspiciatis, itaque, architecto quae nostrum totam distinctio maxime
        corporis. Fugit maxime commodi sed. At, quod eum quibusdam voluptas in
        modi officia maxime nisi sequi harum dolorum odit explicabo quia
        sapiente blanditiis a laborum soluta quaerat dolores ad hic vel!
        Explicabo sapiente doloribus id? Deserunt, similique expedita hic
        voluptates impedit optio nulla. Repellendus illo, ipsam, commodi
        laboriosam aliquid, iusto consectetur dolore iure ab accusantium odio?
        Ullam recusandae quod cupiditate? Nostrum illo nulla dicta maiores.
        Exercitationem maiores, debitis modi aliquid necessitatibus, pariatur
        repellat dolore quos adipisci excepturi quibusdam eos fugit ad illo, quo
        quas dolorum sapiente! Placeat quaerat nihil vero corporis eius commodi
        illum perferendis! Vel fuga impedit asperiores ullam, iste atque
        eligendi. Nesciunt voluptatibus ipsam doloribus explicabo aut est,
        repellat assumenda? Debitis pariatur consequuntur non voluptatem nihil!
        Blanditiis voluptatibus consequatur quam. Provident, ullam sed!
        Laudantium dolores dolore iusto veritatis voluptates voluptatibus
        molestias ipsam, tempora, reprehenderit quos repudiandae esse quam.
        Error molestiae facilis facere velit ex suscipit commodi aspernatur
        earum. Ad deleniti adipisci commodi nostrum? Molestiae laboriosam odio
        expedita! Optio, labore inventore? Doloremque perferendis consequuntur,
        libero repellendus dolore eligendi minima? Nesciunt dolorum ipsam, atque
        nihil, dolor ut consectetur earum accusamus veritatis minus laboriosam
        necessitatibus sequi! Quaerat eveniet sit eum sint. Sequi explicabo sit
        nisi unde similique magni? Culpa doloremque dolorem ipsam quod omnis
        debitis quisquam aliquam quae! Eos recusandae sint nam, veritatis nemo
        itaque ullam.
      </Modal>
    </>
  );
}
