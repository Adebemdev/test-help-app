import Card from '../Card';

export default function BuitForSection() {
  return (
    <section className="bg-[#FAF9F8] flex items-center justify-center flex-col pb-4">
      <div className="flex items-center justify-center flex-col gap-4">
        <h3 className="font-lato font-extrabold text-[28px] text-[#000000] leading-[100%]">
          Built For
        </h3>
        <div className="flex items-center justify-center mb-6">
          <p className="italic capitalize font-instrument-serif text-2xl leading-9">
            connection <br /> Convenience <br /> soft life
          </p>
        </div>
      </div>
      <p className="w-[361] text-black text-center font-lato font-semibold text-xl leading-[100%] -tracking-tight mb-12">
        Help App is built with{' '}
        <span className="font-lato italic text-black/50">
          partnership, Seamless connection, User autonomy, Safety & Trust
        </span>{' '}
        in mind ....
      </p>
      <div className="flex flex-col">
        <Card
          number={1}
          title="Service Request Autonomy"
          description="Post your job on your terms and decide who works with you, how much you pay, and when the job gets done"
        />
        <Card
          number={2}
          title="Safety - Trust guaranteed"
          description="Every of our provider is properly verified, so you can book with confidence knowing your safety comes first"
        />
        <Card
          number={3}
          title="High Quality of Service"
          description="From start to finish, expect excellence, attention to detail, and reliable service delivery from our professionals"
        />
      </div>
    </section>
  );
}
